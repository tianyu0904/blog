/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-26 01:32:59
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-28 00:29:31
 * @FilePath     : /blog/packages/server/src/modules/article/article.controller.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import { Controller, HttpCode, HttpStatus, Post, Req, Body } from '@nestjs/common';
import { Writer } from '../../privileges';
import { constants } from '../../common';
import { ArticleDTO } from './article.dto';
import { ArticleService } from './article.service';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  /**
   * 创建文章
   */
  @Post()
  @Writer()
  @HttpCode(HttpStatus.OK)
  async create(@Req() req: constants.IOperationContext, @Body() article: ArticleDTO) {
    const result = await this.articleService.create(req, article);
    return result;
  }
}
