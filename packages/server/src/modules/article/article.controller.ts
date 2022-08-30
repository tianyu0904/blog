/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-26 01:32:59
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-30 22:00:22
 * @FilePath     : /blog/packages/server/src/modules/article/article.controller.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import { Controller, HttpCode, HttpStatus, Get, Post, Req, Param, Query, Body } from '@nestjs/common';
import { Writer } from '../../privileges';
import { constants } from '../../common';
import { CreateBodyDTO, IndexQueryDTO, DetailParamDto } from './article.dto';
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
  async create(@Req() req: constants.IOperationContext, @Body() body: CreateBodyDTO) {
    const result = await this.articleService.create(req, body);
    return result;
  }

  /**
   * 获取文章列表
   */
  @Get('index')
  @HttpCode(HttpStatus.OK)
  async list(@Req() req: constants.IOperationContext, @Query() query: IndexQueryDTO) {
    const result = await this.articleService.index(req, query);
    return result;
  }

  /**
   * 获取文章详情
   */
  @Get(':articleId')
  @HttpCode(HttpStatus.OK)
  async detail(@Req() req: constants.IOperationContext, @Param() param: DetailParamDto) {
    const articleId = Number.parseInt(param.articleId);
    const result = await this.articleService.detail(req, articleId);
    return result;
  }
}
