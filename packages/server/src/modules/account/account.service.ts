/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-19 14:08:49
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-23 18:06:03
 * @FilePath     : /blog/packages/server/src/modules/account/account.service.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { constants, utils } from '../../common';
import { AccountRegisterDTO } from './account.dto';
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

  public async create(req: constants.IOperationContext, register: Partial<AccountRegisterDTO>): Promise<AccountEntity> {
    const od = constants.OD.from(req);
    const { email, password } = register;
    const existAccount = await this.accountRepo.findOneBy({ email: email.toLowerCase() });

    if (existAccount) {
      throw new HttpException('邮箱已存在', HttpStatus.BAD_REQUEST);
    }

    const newAccount = await this.accountRepo.create({
      nickname: '注册用户' + utils.randomString(),
      email: email.toLowerCase(),
      password,
    });
    newAccount.password = await AccountEntity.encryptPassword(newAccount.password);
    await this.accountRepo.saveWithOd(od, newAccount);
    return newAccount;
  }
}
