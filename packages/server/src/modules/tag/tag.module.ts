/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-26 01:46:01
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-26 01:46:42
 * @FilePath     : /blog/packages/server/src/modules/tag/tag.module.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagEntity } from './tag.entity';
import { TagRepository } from './tag.repository';
import { TagService } from './tag.service';
import { TagController } from './tag.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TagEntity])],
  providers: [TagRepository, TagService],
  exports: [TagService],
  controllers: [TagController],
})
export class TagModule {}
