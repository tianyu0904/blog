/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-26 01:31:23
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-26 01:32:28
 * @FilePath     : /blog/packages/server/src/modules/article/article.service.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import { Injectable } from '@nestjs/common';
import { ArticleRepository } from './article.repository';

@Injectable()
export class ArticleService {
  constructor(private readonly articleRepo: ArticleRepository) {}
}
