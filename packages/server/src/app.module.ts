/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-16 00:12:47
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-19 03:04:06
 * @FilePath     : /blog/packages/server/src/app.module.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

// nest模块支持
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// 用户模块
import { AccountEntity } from './modules/account/account.entity';
import { AccountModule } from './modules/account/account.module';
// 配置文件
import { config } from './config';
// 初始化测试模块
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...config.database,
      entities: [AccountEntity],
    }),
    AccountModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
