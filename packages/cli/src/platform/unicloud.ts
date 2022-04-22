import { resolve } from 'path';
import { symlink, existsSync, lstatSync } from 'fs';
import log from '../log';
import { build } from '../build';
import { delDir } from '../util/file';
import { configData } from '.././config';
import type { Argv } from 'mri';
import type { CommandConfig } from '../../../../typings/config';

/**
 *
 * unicloud环境下的启动服务器
 * @param {Argv<CommandConfig>} args
 */
export const dev = (args: Argv<CommandConfig>) => {
  link();
  // 删除指定的文件夹
  delDir(resolve(process.cwd(), `.sword/dev/unicloud`));
  build(
    args,
    {
      success: () => log.success(`[unicloud:dev]📦 编译成功`),
      error: () => log.err(`[unicloud:dev]📦 编译出现未知问题`)
    },
    {
      skipPackageJson: true,
      outPath: `./.sword/dev/unicloud`,
      minify: false
    }
  );
};

// 将文件夹软链接到目标文件夹
const link = () => {
  const targetPath = `${configData.unicloud.link}/sword`;
  // 判断目标路径的sword是否存在，并且是否是替身，如果不存在/不是替身，就创建
  if (!existsSync(targetPath) || !lstatSync(targetPath).isSymbolicLink()) {
    symlink(resolve(process.cwd(), `./.sword/dev/unicloud`), `${configData.unicloud.link}/sword`, 'junction', (err) => {
      if (err) {
        log.err('[unicloud:link]🔗创建软链接失败');
      } else {
        log.success(`[unicloud:link]🔗软链接成功`);
        log.info(`[unicloud:link]在hbuilderx中，无法在项目管理中显示通过软链接创建的文件夹，你可以打开文件目录查看详情`);
      }
    });
  } else {
    log.info(`[unicloud:link] 🔗跳过创建软链接，因为目标目录已存在sword目录`);
  }
};