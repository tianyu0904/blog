/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-19 15:48:10
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-24 15:39:18
 * @FilePath     : /blog/packages/server/src/modules/account/account.controller.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import {
  Controller,
  UseInterceptors,
  ClassSerializerInterceptor,
  HttpStatus,
  HttpCode,
  Put,
  Req,
  Body,
} from '@nestjs/common';
import { Public } from '../../privileges';
import { constants } from '../../common';
import { AccountRegisterDTO } from './account.dto';
import { AccountService } from './account.service';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  /**
   * 用户注册
   */
  @Put('register')
  @Public()
  @HttpCode(HttpStatus.CREATED)
  async register(@Req() req: constants.IOperationContext, @Body() register: Partial<AccountRegisterDTO>) {
    const result = await this.accountService.create(req, register);
    return result;
  }

  /**
   * 修改基本信息
   */
  @Put('basic')
  @UseInterceptors(ClassSerializerInterceptor)
  @HttpCode(HttpStatus.CREATED)
  async updateBasic(@Req() req, @Body() account) {
    return account;
  }

  /**
   * 修改密码
   */
  @Put('password')
  @UseInterceptors(ClassSerializerInterceptor)
  @HttpCode(HttpStatus.CREATED)
  async updatePassword(@Req() req, @Body() account) {
    return account;
  }

  /**
   * 修改邮箱
   */
  @Put('email')
  @UseInterceptors(ClassSerializerInterceptor)
  @HttpCode(HttpStatus.CREATED)
  async updateEmail(@Req() req, @Body() account) {
    return account;
  }
}
