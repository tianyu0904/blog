/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-16 15:29:18
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-24 14:46:36
 * @FilePath     : /blog/packages/server/src/modules/account/account.entity.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import { Entity, Column } from 'typeorm';
import { compareSync, hashSync } from 'bcrypt';
import { Exclude } from 'class-transformer';
import { constants, entities } from '../../common';

@Entity()
export class AccountEntity extends entities.DefaultEntity {
  @Column({ type: 'varchar', length: 16, comment: '昵称' })
  nickname: string;

  @Column({ type: 'varchar', length: 100, comment: '邮箱' })
  email: string;

  @Column({ type: 'varchar', length: 20, nullable: true, comment: '手机号' })
  phone?: string;

  @Exclude()
  @Column({ type: 'varchar', length: 500, comment: '密码' })
  password: string;

  @Column({ type: 'varchar', length: 500, nullable: true, comment: '头像' })
  avatar?: string;

  @Column({ type: 'tinyint', default: constants.Account.Role.Normal, comment: '角色' })
  role: constants.Account.Role;

  @Column({ type: 'tinyint', default: constants.Account.Status.Active, comment: '账户状态' })
  status: constants.Account.Status;

  @Column({ type: 'tinyint', default: constants.Account.Gender.Unknown, comment: '性别' })
  gender: constants.Account.Gender;

  @Column({ type: 'varchar', length: 150, nullable: true, comment: 'IP' })
  ip?: string;

  @Column({ type: 'varchar', length: 50, nullable: true, comment: '所在地' })
  region?: string;

  @Column({ type: 'varchar', length: 50, nullable: true, comment: '个人简介' })
  introduction?: string;

  @Column({ type: 'varchar', length: 50, nullable: true, comment: '个人链接' })
  homePage?: string;

  @Column({ type: 'simple-json', nullable: true, comment: '外部链接' })
  link?: constants.Account.LinkInfo;

  static async encryptPassword(password): Promise<string> {
    return hashSync(password, 10);
  }

  static async comparePassword(password0, password1): Promise<boolean> {
    return compareSync(password0, password1);
  }
}
