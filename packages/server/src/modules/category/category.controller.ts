/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-26 01:44:17
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-26 01:45:01
 * @FilePath     : /blog/packages/server/src/modules/category/category.controller.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import { Controller } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
}
