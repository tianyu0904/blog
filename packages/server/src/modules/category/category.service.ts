/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-26 01:42:35
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-26 01:43:27
 * @FilePath     : /blog/packages/server/src/modules/category/category.service.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import { Injectable } from '@nestjs/common';
import { CategoryRepository } from './category.repository';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepo: CategoryRepository) {}
}
