/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-26 01:29:46
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-26 01:30:47
 * @FilePath     : /blog/packages/server/src/modules/article/article.repository.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { repository } from '../../common';
import { ArticleEntity } from './article.entity';

@Injectable()
export class ArticleRepository extends repository.DefaultRepository<ArticleEntity> {
  constructor(private dataSoure: DataSource) {
    super(ArticleEntity.target, dataSoure.createEntityManager());
  }
}
