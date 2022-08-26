/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-26 01:44:17
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-26 23:01:47
 * @FilePath     : /blog/packages/server/src/modules/category/category.controller.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import { Controller, HttpCode, HttpStatus, Post, Req, Body } from '@nestjs/common';
import { constants } from '../../common';
import { CategoryDTO } from './category.dto';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  /**
   * 添加分类
   */
  @Post()
  @HttpCode(HttpStatus.OK)
  async create(@Req() req: constants.IOperationContext, @Body() category: CategoryDTO) {
    return this.categoryService.create(req, category);
  }
}
