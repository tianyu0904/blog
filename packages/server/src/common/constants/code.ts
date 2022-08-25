/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-25 14:36:52
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-25 21:48:55
 * @FilePath     : /blog/packages/server/src/common/constants/code.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

/**
 * 错误码格式
 * 系统级错误 1xxxx
 * * *** **
 *
 * 服务级错误 2-xxx-yy
 * x：模块代码
 * y：具体错误
 */

export const enum Code {
  Unknown = 10000,
  InvalidInput = 10001,

  // 账号模块
  AuthFail = 200101,
  TokenError = 200102,
  EmailExist = 200103,
  PhoneExist = 200104,
  AccountExist = 200105,
  CodeError = 200106,
}
