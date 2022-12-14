/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-16 15:36:21
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-21 01:25:16
 * @FilePath     : /blog/packages/server/src/common/entities/entity.base.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export abstract class DefaultEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column({ type: 'datetime', comment: '创建时间' })
  created_at: Date;

  @Column({ type: 'int', comment: '创建者' })
  created_by: number;

  @Column({ type: 'datetime', nullable: true, comment: '修改时间' })
  updated_at?: Date;

  @Column({ type: 'int', nullable: true, comment: '修改者' })
  updated_by?: number;

  @Column({ type: 'datetime', nullable: true, comment: '删除时间' })
  deleted_at?: Date;

  @Column({ type: 'int', nullable: true, comment: '删除者' })
  deleted_by?: number;
}
