/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-26 01:44:28
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-26 01:45:39
 * @FilePath     : /blog/packages/server/src/modules/tag/tag.controller.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import { Controller } from '@nestjs/common';
import { TagService } from './tag.service';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}
}
