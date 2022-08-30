/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-26 22:52:23
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-30 21:45:35
 * @FilePath     : /blog/packages/server/src/modules/article/article.dto.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import { IsNotEmpty, IsNumber, IsEnum, IsArray, Length } from 'class-validator';
import { constants } from '../../common';

export class CreateBodyDTO {
  @IsNotEmpty({ message: '标题不能为空' })
  @Length(1, 50, { message: '标题长度限制为50个字符' })
  readonly title: string;

  @IsNotEmpty({ message: '分类不能为空' })
  @IsNumber(undefined, { message: '分类ID不正确' })
  readonly categoryId: number;

  @IsNotEmpty({ message: '标签不能为空' })
  @IsArray({ message: '标签应为数组' })
  readonly tagIds: number[];

  @IsNotEmpty({ message: '内容不能为空' })
  readonly content: string;

  @IsNotEmpty({ message: '文章类型不能为空' })
  @IsEnum(constants.Article.Type, { message: '文章类型不存在' })
  readonly type: constants.Article.Type;
}

export class IndexQueryDTO {
  readonly pi: number;

  readonly ps: number;

  readonly keyword: string;

  readonly author: number;

  readonly tags: number[];
}

export class DetailParamDto {
  @IsNotEmpty({ message: '文章ID不能为空' })
  readonly articleId: string;
}
