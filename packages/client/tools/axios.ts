/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-09-01 13:42:24
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-09-01 18:36:00
 * @FilePath     : /blog/packages/client/tools/axios.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import axios from 'axios'
import { message } from 'antd';
import { BASE_URL } from '../config'
import { getToken } from './storage'

export const httpProvider = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

httpProvider.interceptors.request.use(
  config => {
    const token = getToken()
    if (token) {
      config.headers!['Authorization'] = token
    }
    return config
  },
  error => {
    throw new Error('发起请求出错')
  }
);

httpProvider.interceptors.response.use(
  res => {
    return res.data.data;
  },
  err => {
    if (err && err.response && err.response.status) {
      const response = err.response;

      switch (response.status) {
        case 404:
          typeof window !== 'undefined' && message.error('服务器异常!');
          break;
        case 501:
          typeof window !== 'undefined' && message.error(response.data.message);
          break;
        default:
          typeof window !== 'undefined' && message.error(
            (err.response && err.response.data && err.response.data.msg)
            || '未知错误!'
          );
      }
    }
    return Promise.reject(err);
  }
);

