/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-19 15:48:10
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-26 23:00:43
 * @FilePath     : /blog/packages/server/src/modules/account/account.controller.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import { Controller, HttpStatus, HttpCode, Post, Req, Body } from '@nestjs/common';
import { Public } from '../../privileges';
import { constants } from '../../common';
import { RegisterDTO, RegisterCodeDTO } from './account.dto';
import { AccountService } from './account.service';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  /**
   * 发送注册验证码
   */
  @Post('register/code')
  @Public()
  @HttpCode(HttpStatus.OK)
  async registerCode(@Req() req: constants.IOperationContext, @Body() registerCode: RegisterCodeDTO) {
    const result = await this.accountService.sendRegisterCode(req, registerCode);
    return result;
  }

  /**
   * 用户注册
   */
  @Post('register/create')
  @Public()
  @HttpCode(HttpStatus.CREATED)
  async registerCreate(@Req() req: constants.IOperationContext, @Body() register: RegisterDTO) {
    const result = await this.accountService.create(req, register);
    return result;
  }
}
