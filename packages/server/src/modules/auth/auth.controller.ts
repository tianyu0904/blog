/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-22 00:13:44
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-23 17:46:09
 * @FilePath     : /blog/packages/server/src/modules/auth/auth.controller.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import { Controller, HttpStatus, HttpCode, Get, Put, Body, Req } from '@nestjs/common';
import { Public } from '../../privileges';
import { constants } from '../../common';
import { AuthDTO } from './auth.dto';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async test() {
    return 'success';
  }

  @Put('auth')
  @Public()
  @HttpCode(HttpStatus.OK)
  async login(@Req() req: constants.IOperationContext, @Body() auth: AuthDTO) {
    const result = await this.authService.login(req, auth);
    return result;
  }
}
