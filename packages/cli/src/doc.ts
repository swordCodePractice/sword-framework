import { writeFileRecursive } from '~util/file';
import { generateSchema } from './core/api';
import { getApiMap } from '@runtime/core/map';
import log from './core/log';
import { resolve } from 'path';
import { OpenAPIV3_1 } from 'openapi-types';
import { getPackageJson } from '~util/package';
import { configData } from './core/config';
import type Mri from 'mri';
import type { CommandConfig } from '#types/config';
import type { Map } from '@runtime/core/map';

type AccepptProtoName = ['ReqParams', 'ReqQuery', 'Res'];

type Proto = {
  type: string;
  comment?: string;
  properties?: {
    id: number;
    name: string;
    optional?: boolean;
    type: {
      type: string;
      comment?: string;
    };
  }[];
  [key: string]: unknown;
};

export type PropertiesAstReturn = {
  id: number;
  name: string | null;
  type: {
    type: string;
    title?: string;
    desc?: string;
    optional?: boolean;
  };
}[];

export type TransProtoReturn = {
  url: string;
  title?: string;
  desc?: string;
  ReqParams: PropertiesAstReturn;
  ReqQuery: PropertiesAstReturn;
  Res: PropertiesAstReturn;
};

const accepptProtoNames: AccepptProtoName = ['ReqParams', 'ReqQuery', 'Res'];

// 定义apimap
let apiMap: Record<string, Map> = {};
// 定义一个以父路由为key，value为markdown文档的对象
const markdownMap: Record<string, string> = {};

// 定义一个openapi格式的json
const openApiJson: OpenAPIV3_1.Document = {
  openapi: '3.0.1',
  info: {
    title: '',
    description: '',
    version: ''
  },
  tags: [],
  paths: {},
  components: {
    schemas: {}
  }
};

export default async (args: Mri.Argv<CommandConfig>) => {
  try {
    log.info('开始生成文档');
    // 生成api数据，用于获取指示器等详细api信息
    const { apiMap: map } = await getApiMap();
    apiMap = map;
    // 生成ast数据
    const { apiResult } = await generateSchema(null, {
      keepComment: true
    });
    for (const key in apiResult) {
      // key 为 api
      // 判断parentRoute是否存在
      // 通过key解析出api后的第一个路由作为父路由
      const parentRoute = key.split('/')[2];
      if (!markdownMap[parentRoute]) {
        markdownMap[parentRoute] = ``;
      }
      const protoData = apiResult[key].proto;
      const result: TransProtoReturn = {
        url: key,
        ReqParams: [],
        ReqQuery: [],
        Res: []
      };
      transAst(protoData, result);
      // 编译markdown文档
      markdownMap[parentRoute] += await compileMarkdown(result, markdownMap[parentRoute]);
      // 编译openapi文档
      openApiJson.paths![key] = await compileOpenApi(result, parentRoute);
      // 给openapi中的tags字段写入parentRoute
      if (!openApiJson.tags!.find((t) => t.name === parentRoute)) {
        openApiJson.tags!.push({
          name: parentRoute
        });
      }
    }
    outputMarkdown();
    outputOpenApi();
    // 处理packagejson
    const packageData = getPackageJson();
    if (packageData) {
      const { package: packageInfo } = packageData;
      // 给openapi的info赋值
      for (const key in openApiJson.info) {
        if (packageInfo[key]) {
          (openApiJson.info as any)[key] = packageInfo[key];
        }
      }
    } else {
      log.err('未找到package.json文件');
    }
  } catch (error) {
    log.err('生成文档错误');
    throw new Error(error as any);
  }
};

// 从ast转换数据
const transAst = async (protoData: Record<string, unknown>, result: TransProtoReturn) => {
  for (const protoKey in protoData) {
    const proto = protoData[protoKey] as Proto;
    for (const acceptProtoName of accepptProtoNames) {
      // 筛选合格的proto
      if (protoKey.endsWith(acceptProtoName)) {
        // 解析注释
        parseComment(proto, result, acceptProtoName);
      }
    }
  }
};

// 解析多行注释
const parseMultiLineComment = (comment: string | undefined) => {
  if (comment) {
    const commentArr = comment.split('\n');
    return [commentArr[0], commentArr.slice(1).join('\n')];
  } else {
    return ['暂无', '暂无'];
  }
};

// 解析注释
const parseComment = (proto: Proto, result: TransProtoReturn, acceptProtoName: AccepptProtoName[number]) => {
  // 当前如果是params的节点，解析顶层注释时要设置title，desc等等，因为params的顶层代表了整个接口的说明
  // 通过换行符分割注释
  const [title, desc] = parseMultiLineComment(proto.comment);
  if (acceptProtoName === 'ReqParams') {
    result.title = title;
    result.desc = desc;
  } else {
    // 如果存在顶级注释且没有properties，就说明这是一个类型别名，用户使用顶级注释来表示类型别名
    if (proto.comment && !proto.properties) {
      result[acceptProtoName].push({
        id: 0,
        name: null,
        type: {
          type: proto.type,
          title,
          desc
        }
      });
    }
  }

  // 解析完顶层注释之后，就要解析具体proto属性的字段
  if (proto.properties) {
    for (const key in proto.properties) {
      const property = proto.properties[key];
      // 判断property中是否存在type
      const [title, desc] = parseMultiLineComment(property.type.comment);
      result[acceptProtoName].push({
        id: property.id,
        name: property.name,
        type: {
          type: property.type.type,
          title,
          desc,
          optional: property.optional
        }
      });
    }
  }
  return result;
};

// 编译markdown文档
const compileMarkdown = async (result: TransProtoReturn, markdown: string) => {
  // 判断config中是否有markdown的配置
  if (configData.doc.markdown) {
    return await configData.doc.markdown.compile(result, markdown, { apiMap });
  }
  const handleMarkdownTable = (data: PropertiesAstReturn) => {
    return data
      .map(
        (item) =>
          `| ${!item.type.optional && item.name ? '*' : ''}${item.name || '暂无'} | ${item.type.type} | ${item.type.title || '暂无'} | ${item.type.desc} |`
      )
      .join('\n');
  };
  // 拼接内容
  markdown += `
  ## ${result.title}
  > ${result.desc}

  支持的请求方法：${apiMap[result.url].method.join('，')}
  路由：${result.url}

  ### 请求Params参数
  | 参数名 | 类型 | 名称 | 描述 |
  | ------ | ---- | ---- | ---- |
  ${handleMarkdownTable(result.ReqParams)}

  ### 请求Query参数
  | 参数名 | 类型 | 名称 | 描述 |
  | ------ | ---- | ---- | ---- |
  ${handleMarkdownTable(result.ReqQuery)}

  ### 返回参数
  | 参数名 | 类型 | 名称 | 描述 |
  | ------ | ---- | ---- | ---- |
  ${handleMarkdownTable(result.Res)}
  `;
  return markdown;
};

// 编译openapi
const compileOpenApi = (result: TransProtoReturn, parentRoute: string): OpenAPIV3_1.Document['paths'] => {
  const apiResult: OpenAPIV3_1.Document['paths'] = {};
  const assignObjArray = (data: Record<string, unknown>[]) => {
    const res: any = {};
    // 循环data
    for (const item of data) {
      for (const key in item) {
        res[key] = item[key];
      }
    }
    return res;
  };
  // key为该api的methods
  apiMap[result.url].method.map((m) => {
    apiResult[m.toLowerCase()] = {
      summary: result.title,
      description: result.desc,
      parameters: result.ReqQuery.map((query) => {
        return {
          name: query.name,
          title: query.type.title,
          description: query.type.desc,
          in: 'query',
          required: !query.type.optional,
          schema: {
            type: query.type.type.toLowerCase() as any
          }
        };
      }) as any,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      requestBody: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: assignObjArray(
                result.ReqParams.map((param) => {
                  return {
                    [param.name as any]: {
                      title: param.type.title,
                      description: param.type.desc,
                      type: param.type.type.toLowerCase() as any
                    }
                  };
                })
              ),
              required: result.ReqParams.filter((param) => !param.type.optional && param.name).map((param) => param.name)
            }
          }
        }
      },
      responses: {
        '200': {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: assignObjArray(
                  result.Res.map((res) => {
                    return {
                      [res.name as any]: {
                        title: res.type.title,
                        description: res.type.desc,
                        type: res.type.type.toLowerCase() as any
                      }
                    };
                  })
                ),
                required: result.Res.filter((param) => !param.type.optional && param.name).map((param) => param.name)
              }
            }
          }
        }
      }
    };
  });
  return apiResult;
};

// 输出markdown文档到指定目录
const outputMarkdown = async () => {
  if (configData.doc.markdown) {
    return configData.doc.markdown.output(markdownMap);
  }
  let str = '';
  for (const key in markdownMap) {
    // 给markdown拼接父标题
    str += `## ${key} \n ${markdownMap[key]}`;
  }
  await writeFileRecursive(resolve(process.cwd(), `docs`, `api.md`), str);
  log.success('生成markdown成功');
};

// 输出openapi文档到指定目录
const outputOpenApi = async () => {
  await writeFileRecursive(resolve(process.cwd(), `docs`, `openapi.json`), JSON.stringify(openApiJson));
  log.success('生成openapi.json成功');
};
