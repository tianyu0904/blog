/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-22 00:13:44
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-22 00:47:34
 * @FilePath     : /blog/packages/server/src/modules/auth/auth.controller.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import {
  Controller,
  UseInterceptors,
  ClassSerializerInterceptor,
  HttpStatus,
  HttpCode,
  Get,
  Put,
  Body,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  @HttpCode(HttpStatus.OK)
  async test() {
    return 'success';
  }

  @Put('auth')
  @UseInterceptors(ClassSerializerInterceptor)
  @HttpCode(HttpStatus.OK)
  async login(@Body() account) {
    const result = await this.authService.login(account);
    return result;
  }
}
