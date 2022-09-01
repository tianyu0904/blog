/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-09-01 15:47:01
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-09-01 18:35:39
 * @FilePath     : /blog/packages/client/tools/storage.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

/**
 * 本地存储
 */
export const save = (key: string, value: object | string) => {
  const data = typeof value === 'object' ? JSON.stringify(value) : value
  localStorage.setItem(key, data)
}

/**
 * 读取本地存储
 * @param {String} key
 */
 export const get = (key: string) => {
  const value = localStorage.getItem(key)
  if (!value) return null
  return value.indexOf('{') === 0 || value.indexOf('[') === 0 ? JSON.parse(value) : value
}

/**
 * 删除本地存储
 */
export const remove = (key: string) => {
  localStorage.removeItem(key)
}

export const clear = () => {
  localStorage.clear()
}

/**
 * 获取 token
 */
export function getToken() {
  let token = ''
  const userInfo = get('userInfo')

  if (userInfo && userInfo.token) {
    token = 'Bearer ' + userInfo.token
  }

  return token
}
