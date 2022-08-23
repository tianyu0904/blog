/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-22 14:37:28
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-23 17:09:43
 * @FilePath     : /blog/packages/server/src/modules/account/account.dto.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import { IsNotEmpty, IsEmail, Length } from 'class-validator';

export class AccountRegisterDTO {
  @IsNotEmpty({ message: '邮箱不能为空' })
  @IsEmail({}, { message: '邮箱格式不正确' })
  readonly email: string;

  @IsNotEmpty({ message: '密码不能为空' })
  @Length(8, 32, { message: '密码长度应为8-32个字符' })
  readonly password: string;
}
