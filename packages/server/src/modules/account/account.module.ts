/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-18 14:16:10
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-20 17:15:20
 * @FilePath     : /blog/packages/server/src/modules/account/account.module.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountEntity } from './account.entity';
import { AccountService, JwtStrategy } from './account.service';
import { AccountRepository } from './account.repository';
import { AccountController } from './account.controller';

const passModule = PassportModule.register({ defaultStrategy: 'jwt' });
const jwtModule = JwtModule.register({ secret: 'blog', signOptions: { expiresIn: '2h' } });
@Module({
  imports: [passModule, jwtModule, TypeOrmModule.forFeature([AccountEntity])],
  providers: [JwtStrategy, AccountService, AccountRepository],
  exports: [passModule, jwtModule, AccountService],
  controllers: [AccountController],
})
export class AccountModule {}
