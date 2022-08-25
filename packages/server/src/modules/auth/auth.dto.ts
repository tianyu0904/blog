/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-23 16:42:36
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-25 22:12:26
 * @FilePath     : /blog/packages/server/src/modules/auth/auth.dto.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import { IsNotEmpty, IsEmail, IsPhoneNumber, Length } from 'class-validator';

export class NormalAuthDTO {
  @IsNotEmpty({ message: '邮箱不能为空' })
  @IsEmail(undefined, { message: '邮箱格式不正确' })
  readonly email: string;

  @IsNotEmpty({ message: '密码不能为空' })
  readonly password: string;
}

export class PhoneAuthDto {
  @IsNotEmpty({ message: '手机不能为空' })
  @IsPhoneNumber(undefined, { message: '手机格式不正确' })
  readonly phone: string;

  @IsNotEmpty({ message: '验证码不能为空' })
  @Length(6, 6, { message: '验证码长度为6位' })
  readonly code: string;
}

export class PhoneCodeDTO {
  @IsNotEmpty({ message: '手机不能为空' })
  @IsPhoneNumber(undefined, { message: '手机格式不正确' })
  readonly phone: string;
}
