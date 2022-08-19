/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-19 14:46:20
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-20 02:05:11
 * @FilePath     : /blog/packages/server/src/modules/account/account.repository.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { repository } from '../../common';
import { AccountEntity } from './account.entity';

@Injectable()
export class AccountRepository extends repository.DefaultRepository<AccountEntity> {
  constructor(private dataSoure: DataSource) {
    super(AccountEntity.target, dataSoure.createEntityManager());
  }
}
