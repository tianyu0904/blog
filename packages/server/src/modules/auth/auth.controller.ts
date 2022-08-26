/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-22 00:13:44
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-26 23:01:28
 * @FilePath     : /blog/packages/server/src/modules/auth/auth.controller.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import { Controller, HttpStatus, HttpCode, Get, Post, Body, Req } from '@nestjs/common';
import { Public } from '../../privileges';
import { constants } from '../../common';
import { NormalAuthDTO, PhoneAuthDto, PhoneCodeDTO } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * 游客登录
   */
  @Get('guest')
  @Public()
  @HttpCode(HttpStatus.OK)
  async loginGuest() {
    const result = await this.authService.loginGuest();
    return result;
  }

  /**
   * 邮箱密码登录
   */
  @Post('normal')
  @Public()
  @HttpCode(HttpStatus.OK)
  async loginNormal(@Req() req: constants.IOperationContext, @Body() normalAuth: NormalAuthDTO) {
    const result = await this.authService.loginNormal(req, normalAuth);
    return result;
  }

  /**
   * 手机短信登录
   */
  @Post('phone')
  @Public()
  @HttpCode(HttpStatus.OK)
  async loginPhone(@Req() req: constants.IOperationContext, @Body() phoneAuth: PhoneAuthDto) {
    const result = await this.authService.loginPhone(req, phoneAuth);
    return result;
  }

  /**
   * 发送手机短信
   */
  @Post('code')
  @Public()
  @HttpCode(HttpStatus.OK)
  async phoneCode(@Req() req: constants.IOperationContext, @Body() phoneCode: PhoneCodeDTO) {
    const result = await this.authService.phoneCode(req, phoneCode);
    return result;
  }
}
