/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-18 13:37:25
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-18 20:38:05
 * @FilePath     : /blog/packages/server/src/modules/category/category.entity.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import { Entity, Column, OneToMany } from 'typeorm';
import { entities } from '../../common';
import { ArticleEntity } from '../article/article.entity';

@Entity()
export class CategoryEntity extends entities.BelongEntity {
  @Column({ type: 'varchar', length: 20, comment: '分类名称' })
  name: string;

  @OneToMany(() => ArticleEntity, (x) => x.category)
  articles: ArticleEntity[];
}
