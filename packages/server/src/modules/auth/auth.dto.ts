/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-23 16:42:36
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-23 17:46:46
 * @FilePath     : /blog/packages/server/src/modules/auth/auth.dto.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import { IsNotEmpty, IsEmail } from 'class-validator';

export class AuthDTO {
  @IsNotEmpty({ message: '邮箱不能为空' })
  @IsEmail({}, { message: '邮箱格式不正确' })
  readonly email: string;

  @IsNotEmpty({ message: '密码不能为空' })
  readonly password: string;
}
