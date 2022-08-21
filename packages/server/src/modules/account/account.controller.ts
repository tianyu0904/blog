/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-19 15:48:10
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-22 01:55:44
 * @FilePath     : /blog/packages/server/src/modules/account/account.controller.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import {
  Controller,
  UseInterceptors,
  ClassSerializerInterceptor,
  UseGuards,
  HttpStatus,
  HttpCode,
  Put,
  Req,
  Body,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { AccountService } from './account.service';
import { AccountEntity } from './account.entity';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  /**
   * 用户注册
   */
  @Put('register')
  @UseInterceptors(ClassSerializerInterceptor)
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() account: Partial<AccountEntity>) {
    const result = await this.accountService.create(account);
    return result;
  }

  /**
   * 修改基本信息
   */
  @Put('basic')
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.CREATED)
  async updateBasic(@Req() req, @Body() account: Partial<AccountEntity>) {
    return account;
  }

  /**
   * 修改密码
   */
  @Put('password')
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.CREATED)
  async updatePassword(@Req() req, @Body() account: Partial<AccountEntity>) {
    return account;
  }

  /**
   * 修改邮箱
   */
  @Put('email')
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.CREATED)
  async updateEmail(@Req() req, @Body() account: Partial<AccountEntity>) {
    return account;
  }
}
