/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-18 11:13:54
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-18 20:37:36
 * @FilePath     : /blog/packages/server/src/modules/article/article.entity.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import { Entity, Column, JoinColumn, ManyToOne, ManyToMany } from 'typeorm';
import { constants, entities } from '../../common';
import { CategoryEntity } from '../category/category.entity';
import { TagEntity } from '../tag/tag.entity';

@Entity()
export class ArticleEntity extends entities.BelongEntity {
  @Column({ type: 'varchar', length: 50, comment: '标题' })
  title: string;

  @Column({ type: 'text', comment: '摘要' })
  summary: string;

  @Column({ type: 'mediumtext', comment: '原始内容' })
  context: string;

  @Column({ type: 'mediumtext', comment: '格式化内容' })
  html: string;

  @Column({ type: 'text', comment: '格式化内容索引' })
  toc: string;

  @Column({ type: 'tinyint', comment: '文章类型' })
  type: constants.Article.Type;

  @Column({ type: 'int', default: 0, comment: '阅读量' })
  views: number;

  @Column({ type: 'int', default: 0, comment: '点赞量' })
  likes: number;

  @Column({ type: 'timestamp', comment: '发布时间' })
  publish_at: number;

  @ManyToOne(() => CategoryEntity, (x) => x.articles)
  category: CategoryEntity;
  @Column({ comment: '分类ID' })
  categoryId: number;

  @ManyToMany(() => TagEntity, (x) => x.articles)
  @JoinColumn()
  tags: TagEntity[];
}
