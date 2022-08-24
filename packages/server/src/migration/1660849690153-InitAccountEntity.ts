/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-19 03:08:11
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-24 14:48:23
 * @FilePath     : /blog/packages/server/src/migration/1660849690153-InitAccountEntity.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitAccountEntity1660849690153 implements MigrationInterface {
  name = 'InitAccountEntity1660849690153';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`account_entity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` datetime NOT NULL COMMENT '创建时间', \`created_by\` int NOT NULL COMMENT '创建者', \`updated_at\` datetime NULL COMMENT '修改时间', \`updated_by\` int NULL COMMENT '修改者', \`deleted_at\` datetime NULL COMMENT '删除时间', \`deleted_by\` int NULL COMMENT '删除者', \`nickname\` varchar(16) NOT NULL COMMENT '昵称', \`email\` varchar(100) NOT NULL COMMENT '邮箱', \`phone\` varchar(20) NULL COMMENT '手机号', \`password\` varchar(500) NOT NULL COMMENT '密码', \`avatar\` varchar(500) NULL COMMENT '头像', \`role\` tinyint NOT NULL COMMENT '角色' DEFAULT '1', \`status\` tinyint NOT NULL COMMENT '账户状态' DEFAULT '0', \`gender\` tinyint NOT NULL COMMENT '性别' DEFAULT '0', \`ip\` varchar(150) NULL COMMENT 'IP', \`region\` varchar(50) NULL COMMENT '所在地', \`introduction\` varchar(50) NULL COMMENT '个人简介', \`homePage\` varchar(50) NULL COMMENT '个人链接', \`link\` text NULL COMMENT '外部链接', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`a_cache_table\` (\`id\` int NOT NULL AUTO_INCREMENT, \`identifier\` varchar(255) NULL, \`time\` bigint NOT NULL, \`duration\` int NOT NULL, \`query\` text NOT NULL, \`result\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `INSERT INTO \`account_entity\` ( \`id\`, \`nickname\`, \`email\`, \`password\`, \`role\`, \`created_at\`, \`created_by\` ) VALUES (100000, "游客账号", "guest@tianyu1994.com", "Guest", -1, "2000-01-01 00:00:00", 0)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`a_cache_table\``);
    await queryRunner.query(`DROP TABLE \`account_entity\``);
  }
}
