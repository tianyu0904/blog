/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-26 01:42:45
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-27 00:59:00
 * @FilePath     : /blog/packages/server/src/modules/tag/tag.service.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import * as _ from 'lodash';
import { Injectable, HttpException } from '@nestjs/common';
import { constants } from '../../common';
import { TagDTO } from './tag.dto';
import { TagRepository } from './tag.repository';

@Injectable()
export class TagService {
  constructor(private readonly tagRepo: TagRepository) {}

  async findByIds(ids: number[]) {
    return this.tagRepo.findByIds(ids);
  }

  public async create(req: constants.IOperationContext, tag: Partial<TagDTO>) {
    const od = constants.OD.from(req);
    const { name } = tag;

    const existTag = await this.tagRepo.findOneBy({ name });
    if (existTag) {
      throw new HttpException('标签名称已存在', constants.Code.TagExist);
    }

    const color = constants.Color_12[_.random(11)];
    const newTag = await this.tagRepo.create({ name, color });

    const result = await this.tagRepo.saveWithOd(od, newTag);
    return result;
  }
}
