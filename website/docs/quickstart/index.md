---
id: quickstart
title: 快速开始
url: https://www.yuque.com/mlgrgm/lrf0ra/mh1wbh
---

相信你已经看过《安装》部分的内容啦，这一部分我们通过一个简单的例子构造一个API，它就是我们熟悉的Todolist～，我们通过cli创建一个名为”list“的应用，它生成的目录结构如下：

```bash
|- list --------------------------- 后端项目
    |- src
        |- api ----------------------- API 实现
            |- hello ----------------------- hello api
                |- index.ts ----------------------- hello api 入口文件
                |- proto.ts ----------------------- hello api proto文件
        |- index.ts ----------------------- 入口文件
        |- api.json ----------------------- 预缓存的api.json
```

你可能会疑惑，入口文件我懂，但是这个proto.ts是做什么的呢？其实proto的概念很像[protobuff](https://zh.wikipedia.org/wiki/Protocol_Buffers)，而sword的proto实现是来自于：

[tsbuffer-proto-generator](https://www.npmjs.com/package/tsbuffer-proto-generator)

作为快速入门章节，在这里不会深入proto的实现， 我们只需要了解这里的proto.ts，是用来定义接口的输入和输出类型的：

```bash

export interface ReqParams {

}
export interface ReqQuery {

}
export interface Res {
  message: string;
}
```

- ReqParams：请求body参数
- ReqQuery：请求query参数
- Res：返回参数

在这里不一定要定义为interface，你也可以用类型别名替代它，尤其是你想单纯地返回一个类型的时候：

```bash
export type Res = string;
```

我们在这里定义了3个proto，就可以严格的控制api的输入和输出，就算你在api的入口文件中忽略了ts的类型校验，在接口访问的时候如果参数不符合定义的标准，则就不会执行逻辑。

<a name="iJ5dH"></a>

## 导出APi入口函数

我们需要在index.ts中导出一个[useApi](Hooks.md)函数, 比如这样:

```typescript
import { useApi } from '@swordjs/sword-framework';
import { ReqQuery, ReqParams, Res } from './proto';

export const main = useApi<{
  query: ReqQuery;
  params: ReqParams;
  res: Res;
}>({
  handler: (ctx) => {
    return {
      message: 'hello'
    };
  }
});

```

> ps: 在某些少数情况下, 你的团队可能避免你使用export default (因为这会造成treeshaking陷阱), 所以我们在sword中推荐你导出一个main函数, 当然如果你的团队没有这个规定, 那sword也同样支持export default, 但是请注意你的版本必须在v1.2.0(runtime), v1.1.3(脚手架cli)以上