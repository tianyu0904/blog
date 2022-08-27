/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-18 11:13:54
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-28 02:36:27
 * @FilePath     : /blog/packages/server/src/modules/article/article.entity.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import { Entity, Column, ManyToOne, ManyToMany, JoinTable, RelationId } from 'typeorm';
import { constants, entities } from '../../common';
import { CategoryEntity } from '../category/category.entity';
import { TagEntity } from '../tag/tag.entity';

@Entity()
export class ArticleEntity extends entities.DefaultEntity {
  @Column({ type: 'varchar', length: 50, comment: '标题' })
  title: string;

  @Column({ type: 'text', comment: '摘要' })
  summary: string;

  @Column({ type: 'mediumtext', comment: '原始内容' })
  content: string;

  @Column({ type: 'mediumtext', comment: '格式化内容' })
  html: string;

  @Column({ type: 'json', comment: '文章目录' })
  catalogue: constants.Article.Catalogue[];

  @Column({ type: 'tinyint', comment: '文章类型' })
  type: constants.Article.Type;

  @Column({ type: 'tinyint', comment: '文章状态' })
  static: constants.Article.Status;

  @Column({ type: 'tinyint', comment: '是否置顶' })
  istop: constants.Is;

  @Column({ type: 'int', default: 0, comment: '阅读量' })
  views: number;

  @Column({ type: 'int', default: 0, comment: '点赞量' })
  likes: number;

  @Column({ type: 'datetime', nullable: true, comment: '发布时间' })
  publish_at?: Date;

  @Column({ type: 'varchar', length: 150, nullable: true, comment: 'IP' })
  ip?: string;

  @Column({ type: 'int', nullable: true, comment: '原始文章ID' })
  parent?: number;

  @ManyToOne(() => CategoryEntity, (x) => x.articles)
  category: CategoryEntity;
  @RelationId((x: ArticleEntity) => x.category)
  categoryId: number;

  @ManyToMany(() => TagEntity, (x) => x.articles)
  @JoinTable({ name: 'article_tag_relation' })
  tags: TagEntity[];
}
