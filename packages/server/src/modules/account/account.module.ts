/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-18 14:16:10
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-22 00:43:32
 * @FilePath     : /blog/packages/server/src/modules/account/account.module.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountEntity } from './account.entity';
import { AccountRepository } from './account.repository';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AccountEntity])],
  providers: [AccountRepository, AccountService],
  exports: [AccountService],
  controllers: [AccountController],
})
export class AccountModule {}
