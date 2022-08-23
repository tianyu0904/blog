/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-22 13:59:38
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-22 15:29:01
 * @FilePath     : /blog/packages/server/src/common/logger/index.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import * as os from 'os';
import * as path from 'path';
import * as fs from 'fs-extra';
import * as log4js from 'log4js';

const logPath = path.join(os.homedir(), '.log', 'blog');

void ['info', 'request', 'response', 'error'].forEach((dir) => {
  fs.ensureDirSync(path.join(logPath, dir));
});

const resolvePath = (dir, filename) => path.join(logPath, dir, filename);

const commonCinfig = {
  type: 'dateFile',
  pattern: '-yyyy-MM-dd.log',
  alwaysIncludePattern: true,
};

log4js.configure({
  appenders: {
    request: {
      ...commonCinfig,
      filename: resolvePath('request', 'request'),
      category: 'default',
    },
    response: {
      ...commonCinfig,
      filename: resolvePath('response', 'response'),
      category: 'default',
    },
    info: {
      ...commonCinfig,
      filename: resolvePath('info', 'info'),
      category: 'info',
    },
    error: {
      ...commonCinfig,
      filename: resolvePath('error', 'error'),
      category: 'error',
    },
  },
  categories: {
    default: { appenders: ['request', 'response'], level: 'info' },
    info: { appenders: ['info'], level: 'info' },
    error: { appenders: ['error'], level: 'info' },
  },
});

export const request = log4js.getLogger('request');
export const response = log4js.getLogger('response');
export const info = log4js.getLogger('info');
export const error = log4js.getLogger('error');
