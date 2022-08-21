/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-16 00:12:47
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-22 01:30:48
 * @FilePath     : /blog/packages/server/src/app.module.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

// nest模块支持
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// 配置文件
import { config } from './config';
// 鉴权模块
import { AuthModule } from './modules/auth/auth.module';
// 用户模块
import { AccountEntity } from './modules/account/account.entity';
import { AccountModule } from './modules/account/account.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...config.database,
      entities: [AccountEntity],
    }),
    AuthModule,
    AccountModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
