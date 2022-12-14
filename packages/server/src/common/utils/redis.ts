/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-24 16:13:51
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-28 00:28:00
 * @FilePath     : /blog/packages/server/src/common/utils/redis.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import Redis from 'ioredis';
import { config } from '../../config';

class RedisInstance {
  static initRedis() {
    const redis = new Redis(config.redis);
    redis.on('error', (err) => console.log('Redis cluster Error', err));
    redis.on('connect', () => console.log('Redis connect success'));
    return redis;
  }
}

export const RedisClient = RedisInstance.initRedis();
