/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-19 15:48:10
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-20 21:45:04
 * @FilePath     : /blog/packages/server/src/modules/account/account.controller.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Put,
  HttpCode,
  HttpStatus,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AccountService, JwtAuthGuard } from './account.service';
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
    console.log(account);
    const result = await this.accountService.create(account);
    return result;
  }

  /**
   * 用户登录
   */
  @Put('login')
  @UseInterceptors(ClassSerializerInterceptor)
  @HttpCode(HttpStatus.OK)
  async login(@Body() account: Partial<AccountEntity>) {
    const result = await this.accountService.login(account);
    return result;
  }

  /**
   * 更新信息
   */
  @Put('account')
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.CREATED)
  async updateAccount(@Body() account: Partial<AccountEntity>) {
    return account;
  }

  /**
   * 修改密码
   */
  @Put('password')
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.CREATED)
  async updatePassword(@Body() account: Partial<AccountEntity>) {
    return account;
  }
}
