/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-19 15:48:10
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-20 02:13:30
 * @FilePath     : /blog/packages/server/src/modules/account/account.controller.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import { Controller, Get } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountEntity } from './account.entity';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get()
  findAll(): Promise<AccountEntity[]> {
    return this.accountService.findAll();
  }
}
