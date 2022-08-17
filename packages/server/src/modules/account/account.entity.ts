/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-16 15:29:18
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-17 23:06:13
 * @FilePath     : /blog/packages/server/src/modules/account/account.entity.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import { Entity, Column } from 'typeorm';
import { constants, entities } from '../../common';

@Entity()
export class AccountEntity extends entities.DefaultEntity {
  @Column({ type: 'varchar', length: 16, comment: '昵称' })
  nickname: string;

  @Column({ type: 'varchar', length: 100, comment: '邮箱' })
  email: string;

  @Column({ type: 'varchar', length: 500, comment: '密码' })
  password: string;

  @Column({ type: 'varchar', length: 500, nullable: true, comment: '头像' })
  avatar?: string;

  @Column({ type: 'tinyint', default: constants.User.Role.Normal, comment: '角色' })
  role: constants.User.Role;

  @Column({ type: 'tinyint', default: constants.User.Status.Active, comment: '账户状态' })
  status: constants.User.Status;

  @Column({ type: 'tinyint', default: constants.User.Gender.Unknown, comment: '性别' })
  gender: constants.User.Gender;

  @Column({ type: 'varchar', length: 50, nullable: true, comment: '所在地' })
  region?: string;

  @Column({ type: 'varchar', length: 50, nullable: true, comment: '个人简介' })
  introduction?: string;

  @Column({ type: 'varchar', length: 50, nullable: true, comment: '个人链接' })
  homePage?: string;

  @Column({ type: 'simple-json', nullable: true, comment: '外部链接' })
  link?: constants.User.LinkInfo;
}
