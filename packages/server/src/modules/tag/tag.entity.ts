/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-18 14:03:33
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-18 20:35:26
 * @FilePath     : /blog/packages/server/src/modules/tag/tag.entity.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import { Entity, Column, ManyToMany } from 'typeorm';
import { entities } from '../../common';
import { ArticleEntity } from '../article/article.entity';

@Entity()
export class TagEntity extends entities.BelongEntity {
  @Column({ type: 'varchar', length: 20, comment: '标签名称' })
  name: string;

  @Column({ type: 'varchar', length: 10, comment: '标签颜色' })
  color: string;

  @ManyToMany(() => ArticleEntity, (x) => x.tags)
  articles: ArticleEntity[];
}
