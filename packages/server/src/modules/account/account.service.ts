/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-19 14:08:49
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-22 01:07:00
 * @FilePath     : /blog/packages/server/src/modules/account/account.service.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { constants } from '../../common';
import { AccountEntity } from './account.entity';
import { AccountRepository } from './account.repository';

@Injectable()
export class AccountService {
  constructor(private readonly accountRepo: AccountRepository) {}

  async findOneById(id: number) {
    return this.accountRepo.findOneBy({ id });
  }

  async findOneByNickname(nickname: string) {
    return this.accountRepo.findOneBy({ nickname });
  }

  async findOneByEmail(email: string) {
    return this.accountRepo.findOneBy({ email });
  }

  public async create(account: Partial<AccountEntity>): Promise<AccountEntity> {
    const od = new constants.OD();
    const { nickname } = account;
    const existAccount = await this.accountRepo.findBy({ nickname });

    if (existAccount) {
      throw new HttpException('用户名已存在', HttpStatus.BAD_REQUEST);
    }

    const newAccount = await this.accountRepo.create(account);
    newAccount.password = await AccountEntity.encryptPassword(newAccount.password);
    await this.accountRepo.saveWithOd(od, newAccount);
    return newAccount;
  }
}
