/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-26 01:41:53
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-26 01:42:18
 * @FilePath     : /blog/packages/server/src/modules/tag/tag.repository.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { repository } from '../../common';
import { TagEntity } from './tag.entity';

@Injectable()
export class TagRepository extends repository.DefaultRepository<TagEntity> {
  constructor(private dataSoure: DataSource) {
    super(TagEntity.target, dataSoure.createEntityManager());
  }
}
