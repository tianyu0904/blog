/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-26 01:32:59
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-26 01:34:14
 * @FilePath     : /blog/packages/server/src/modules/article/article.controller.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import { Controller } from '@nestjs/common';
import { ArticleService } from './article.service';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}
}
