/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-26 01:44:28
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-28 00:27:12
 * @FilePath     : /blog/packages/server/src/modules/tag/tag.controller.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import { Controller, HttpCode, HttpStatus, Post, Req, Body } from '@nestjs/common';
import { Writer } from '../../privileges';
import { constants } from '../../common';
import { TagDTO } from './tag.dto';
import { TagService } from './tag.service';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  /**
   * 添加标签
   */
  @Post()
  @Writer()
  @HttpCode(HttpStatus.OK)
  async create(@Req() req: constants.IOperationContext, @Body() tag: TagDTO) {
    return this.tagService.create(req, tag);
  }
}
