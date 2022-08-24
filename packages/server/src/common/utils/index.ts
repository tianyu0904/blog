/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-23 15:02:06
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-24 16:14:05
 * @FilePath     : /blog/packages/server/src/common/utils/index.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import { v4 } from 'uuid';

export const guid = () => {
  const regex = new RegExp('-', 'g');
  return v4().replace(regex, '').toLowerCase();
};

export const randomString = (count = 4) => {
  const numbers = '0123456789';
  const letters_small = 'abcdefghijklmnopqrstuvwxyz';
  // const letters_big = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const s = numbers + letters_small;

  let result = '';
  //从合并的字符串里随机取出一个值
  while (count > 0) {
    count--;
    result += s[Math.floor(Math.random() * s.length)];
  }
  return result;
};

export const randomNumber = (count = 6) => {
  const chars = '0123456789012345678901234567890123456789';

  let result = '';
  //从合并的字符串里随机取出一个值
  while (count > 0) {
    count--;
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
};

export * from './mailer';
export * from './redis';
