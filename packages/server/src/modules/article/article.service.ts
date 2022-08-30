/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-26 01:31:23
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-30 21:48:45
 * @FilePath     : /blog/packages/server/src/modules/article/article.service.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import * as _ from 'lodash';
import { Injectable, HttpException } from '@nestjs/common';
import { constants, utils } from '../../common';
import { CreateBodyDTO, IndexQueryDTO } from './article.dto';
import { ArticleRepository } from './article.repository';
import { CategoryService } from '../category/category.service';
import { TagService } from '../tag/tag.service';

@Injectable()
export class ArticleService {
  constructor(
    private readonly articleRepo: ArticleRepository,
    private readonly categoryService: CategoryService,
    private readonly tagService: TagService,
  ) {}

  public async create(req: constants.IOperationContext, body: Partial<CreateBodyDTO>) {
    const od = constants.OD.from(req);
    const { title } = body;

    const existArticle = await this.articleRepo.findOneBy({ title, created_by: od.uid });
    if (existArticle) {
      throw new HttpException('文章标题已存在', constants.Code.ArticleExist);
    }

    const { content, categoryId, tagIds, type } = body;

    const [category, tags] = await Promise.all([
      this.categoryService.findOneById(categoryId),
      this.tagService.findByIds(tagIds),
    ]);

    const { html, toc } = utils.MarkDown.mdToHtml(content);

    const catalogue: constants.Article.Catalogue[] = [];
    _.forEach(toc, (i) => {
      const temp: constants.Article.Catalogue = { level: i.level, text: i.text };
      catalogue.push(temp);
    });

    const StatusEnum = constants.Article.Status;

    const newArticle = await this.articleRepo.create({
      title,
      summary: '',
      content,
      html,
      catalogue,
      type,
      status: type === constants.Article.Type.Public ? StatusEnum.Pending : StatusEnum.Waiting,
      istop: constants.Is.No,
      category,
      tags,
    });

    const result = await this.articleRepo.saveWithOd(od, newArticle);
    return result;
  }

  public async index(req: constants.IOperationContext, query: Partial<IndexQueryDTO>) {
    const { pi = 0, ps = 20 } = query;

    const [articles, count] = await this.articleRepo.findAndCount({
      take: ps,
      skip: pi * ps,
      relations: ['category', 'tags'],
      where: {
        type: constants.Article.Type.Public,
        status: constants.Article.Status.Approve,
      },
      select: ['id', 'title', 'summary', 'views', 'likes', 'publish_at', 'category', 'tags'],
    });

    const result = {
      pi,
      ps,
      pc: count ? Math.ceil(count / ps) : 0,
      count,
      value: articles,
    };

    return result;
  }

  public async detail(req: constants.IOperationContext, id: number) {
    const article = await this.articleRepo.findOne({
      where: {
        id: id || 0,
        type: constants.Article.Type.Public,
        status: constants.Article.Status.Approve,
      },
      select: ['id', 'title', 'summary', 'views', 'likes', 'publish_at', 'category', 'tags'],
      relations: ['category', 'tags'],
    });
    if (!article) {
      throw new HttpException('文章不存在', constants.Code.ArticleNotExist);
    }

    const result = {
      value: article,
    };

    return result;
  }
}
