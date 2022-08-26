/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-26 10:50:56
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-26 15:04:02
 * @FilePath     : /blog/packages/server/src/modules/category/category.dto.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import { IsNotEmpty, Length } from 'class-validator';

export class CategoryDTO {
  @IsNotEmpty({ message: '分类名称不能为空' })
  @Length(1, 20, { message: '名称不能超过20个字符' })
  readonly name: string;
}
