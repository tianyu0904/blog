/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-19 14:56:30
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-21 01:52:14
 * @FilePath     : /blog/packages/server/src/common/repository/repository.base.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import * as _ from 'lodash';
import * as dayjs from 'dayjs';
import { Repository, EntityTarget, EntityManager } from 'typeorm';
import { constants, entities } from '../../common';

export class DefaultRepository<TEntity extends entities.DefaultEntity> extends Repository<TEntity> {
  constructor(target: EntityTarget<TEntity>, manager: EntityManager) {
    super(target, manager);
  }

  public async saveWithOd(od: constants.OD, entity: TEntity | TEntity[]): Promise<TEntity | TEntity[]> {
    const entities = _.isArray(entity) ? entity : [entity];
    for (const e of entities) {
      e.created_at = e.created_at || dayjs().toDate();
      e.created_by = e.created_by || od.uid || 0;
      e.updated_at = e.updated_at || dayjs().toDate();
      e.updated_by = e.updated_by || od.uid || 0;
    }
    console.log(entities);
    await super.save(entities);
    return entities;
  }
}
