/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-09-01 14:07:05
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-09-01 14:18:31
 * @FilePath     : /blog/packages/client/config.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

export const BASE_URL = process.env.NODE_ENV === 'production'
  ? 'https://blog.tianyu1994.com/api'
  : 'http://127.0.0.1:3100/api'

export const BLOG_NAME = '今天也是超喜欢你的小宇呢～'
