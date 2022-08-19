/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-19 14:08:49
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-20 02:13:28
 * @FilePath     : /blog/packages/server/src/modules/account/account.service.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import { Injectable } from '@nestjs/common';
import { AccountEntity } from './account.entity';
import { AccountRepository } from './account.repository';

@Injectable()
export class AccountService {
  constructor(private readonly accountRepo: AccountRepository) {}

  async findAll(): Promise<AccountEntity[]> {
    return this.accountRepo.findAll();
  }
}
