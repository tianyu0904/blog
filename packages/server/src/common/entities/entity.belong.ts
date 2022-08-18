/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-18 13:42:04
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-19 14:23:20
 * @FilePath     : /blog/packages/server/src/common/entities/entity.belong.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import { Entity, Column } from 'typeorm';
import { DefaultEntity } from './entity.base';

@Entity()
export abstract class BelongEntity extends DefaultEntity {
  @Column({ type: 'int', comment: '所属博主' })
  belong: number;
}
