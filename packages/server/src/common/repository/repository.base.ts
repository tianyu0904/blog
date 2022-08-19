/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-19 14:56:30
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-20 01:15:54
 * @FilePath     : /blog/packages/server/src/common/repository/repository.base.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import { Repository, EntityTarget, EntityManager } from 'typeorm';
import { entities } from '../../common';

export class DefaultRepository<TEntity extends entities.DefaultEntity> extends Repository<TEntity> {
  constructor(target: EntityTarget<TEntity>, manager: EntityManager) {
    super(target, manager);
  }

  async findAll(): Promise<TEntity[]> {
    return super.find();
  }
}
