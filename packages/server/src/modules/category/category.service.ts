/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-26 01:42:35
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-27 00:58:48
 * @FilePath     : /blog/packages/server/src/modules/category/category.service.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import { Injectable, HttpException } from '@nestjs/common';
import { constants } from '../../common';
import { CategoryDTO } from './category.dto';
import { CategoryRepository } from './category.repository';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepo: CategoryRepository) {}

  async findOneById(id: number) {
    return this.categoryRepo.findOneBy({ id });
  }

  public async create(req: constants.IOperationContext, category: Partial<CategoryDTO>) {
    const od = constants.OD.from(req);
    const { name } = category;

    const existCategory = await this.categoryRepo.findOneBy({ name, belong: od.uid });
    if (existCategory) {
      throw new HttpException('分类名称已存在', constants.Code.CategoryExist);
    }

    const newCategory = await this.categoryRepo.create({ name, belong: od.uid });

    const result = await this.categoryRepo.saveWithOd(od, newCategory);
    return result;
  }
}
