/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-16 00:12:47
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-26 01:40:28
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
// 文章模块
import { ArticleEntity } from './modules/article/article.entity';
import { ArticleModule } from './modules/article/article.module';
// 分类模块
import { CategoryEntity } from './modules/category/category.entity';
import { CategoryModule } from './modules/category/category.module';
// 标签模块
import { TagEntity } from './modules/tag/tag.entity';
import { TagModule } from './modules/tag/tag.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...config.database,
      entities: [AccountEntity, ArticleEntity, CategoryEntity, TagEntity],
    }),
    AuthModule,
    AccountModule,
    ArticleModule,
    CategoryModule,
    TagModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
