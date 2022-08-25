/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-26 01:41:03
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-26 01:41:37
 * @FilePath     : /blog/packages/server/src/modules/category/category.repository.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { repository } from '../../common';
import { CategoryEntity } from './category.entity';

@Injectable()
export class CategoryRepository extends repository.DefaultRepository<CategoryEntity> {
  constructor(private dataSoure: DataSource) {
    super(CategoryEntity.target, dataSoure.createEntityManager());
  }
}
