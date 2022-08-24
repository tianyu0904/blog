/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-22 00:13:44
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-24 16:28:07
 * @FilePath     : /blog/packages/server/src/modules/auth/auth.controller.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import { Controller, HttpStatus, HttpCode, Get, Put, Body, Req } from '@nestjs/common';
import { Public } from '../../privileges';
import { constants } from '../../common';
import { AuthDTO, SendRegisterCodeDTO } from './auth.dto';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async test() {
    return 'success';
  }

  /**
   * 用户登录
   */
  @Put('auth')
  @Public()
  @HttpCode(HttpStatus.OK)
  async login(@Req() req: constants.IOperationContext, @Body() auth: Partial<AuthDTO>) {
    const result = await this.authService.login(req, auth);
    return result;
  }

  /**
   * 发送注册验证码
   */
  @Put('auth/code')
  @Public()
  @HttpCode(HttpStatus.OK)
  async sendRegisterCode(@Req() req: constants.IOperationContext, @Body() registerCode: Partial<SendRegisterCodeDTO>) {
    const result = await this.sendRegisterCode(req, registerCode);
    return result;
  }
}
