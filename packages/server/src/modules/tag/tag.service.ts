/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-26 01:42:45
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-26 01:43:49
 * @FilePath     : /blog/packages/server/src/modules/tag/tag.service.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import { Injectable } from '@nestjs/common';
import { TagRepository } from './tag.repository';

@Injectable()
export class TagService {
  constructor(private readonly tagRepo: TagRepository) {}
}
