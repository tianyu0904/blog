/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-26 01:34:26
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-26 01:36:20
 * @FilePath     : /blog/packages/server/src/modules/article/article.module.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleEntity } from './article.entity';
import { ArticleRepository } from './article.repository';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ArticleEntity])],
  providers: [ArticleRepository, ArticleService],
  exports: [ArticleService],
  controllers: [ArticleController],
})
export class ArticleModule {}
