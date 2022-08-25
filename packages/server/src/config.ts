/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-18 14:47:54
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-25 13:48:50
 * @FilePath     : /blog/packages/server/src/config.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import * as _ from 'lodash';
import * as os from 'os';
import * as path from 'path';
import * as fs from 'fs-extra';
import * as yaml from 'js-yaml';
import { DataSourceOptions, DataSource } from 'typeorm';
import { RedisOptions } from 'ioredis';

type Config = {
  port: number;
  jwtSecret: string;
  database: DataSourceOptions;
  redis: RedisOptions;
  mail: {
    host: string;
    port: number;
    secure: boolean;
    auth: {
      name: string;
      user: string;
      pass: string;
    };
  };
};

const config: Config = {
  port: 3100,
  jwtSecret: 'blog',
  database: {
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'root123456',
    database: 'blog',
    charset: 'utf8mb4',
    bigNumberStrings: true,
    synchronize: false,
    logging: false,
    cache: { type: 'database', tableName: 'a_cache_table' },
  },
  redis: {
    host: '127.0.0.1',
    port: 6379,
    password: 'redis123456',
    keyPrefix: 'BLOG:',
  },
  mail: {
    host: 'smtp.qq.com',
    port: 465,
    secure: true,
    auth: {
      name: '用户中心',
      user: 'user@qq.com',
      pass: 'secertKey',
    },
  },
};

const initializeConfig = (config) => {
  const configPath = path.join(os.homedir(), '.config', 'blog.yml');
  fs.ensureDirSync(path.dirname(configPath));
  if (fs.existsSync(configPath)) {
    const envConfig = yaml.load(fs.readFileSync(configPath, 'utf-8')) as Config;
    _.merge(config, envConfig);
  }
};

initializeConfig(config);
export { config };

// default 输出mysql配置，用于数据库迁移脚本。
export default new DataSource(
  _.merge(_.cloneDeep(config.database), {
    entities: ['./src/modules/**/*.entity.ts'],
    migrations: ['./src/migration/*.ts'],
    migrationsTableName: 'a_migration_table',
  }),
);
