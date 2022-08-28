/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-19 03:10:47
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-28 18:08:32
 * @FilePath     : /blog/packages/server/src/migration/1660849846215-InitArticleEntity.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitArticleEntity1660849846215 implements MigrationInterface {
  name = 'InitArticleEntity1660849846215';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`category_entity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` datetime NOT NULL COMMENT '创建时间', \`created_by\` int NOT NULL COMMENT '创建者', \`updated_at\` datetime NULL COMMENT '修改时间', \`updated_by\` int NULL COMMENT '修改者', \`deleted_at\` datetime NULL COMMENT '删除时间', \`deleted_by\` int NULL COMMENT '删除者', \`name\` varchar(20) NOT NULL COMMENT '分类名称', \`belong\` int NOT NULL COMMENT '所属博主', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`tag_entity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` datetime NOT NULL COMMENT '创建时间', \`created_by\` int NOT NULL COMMENT '创建者', \`updated_at\` datetime NULL COMMENT '修改时间', \`updated_by\` int NULL COMMENT '修改者', \`deleted_at\` datetime NULL COMMENT '删除时间', \`deleted_by\` int NULL COMMENT '删除者', \`name\` varchar(20) NOT NULL COMMENT '标签名称', \`color\` varchar(10) NOT NULL COMMENT '标签颜色', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`article_entity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` datetime NOT NULL COMMENT '创建时间', \`created_by\` int NOT NULL COMMENT '创建者', \`updated_at\` datetime NULL COMMENT '修改时间', \`updated_by\` int NULL COMMENT '修改者', \`deleted_at\` datetime NULL COMMENT '删除时间', \`deleted_by\` int NULL COMMENT '删除者', \`title\` varchar(50) NOT NULL COMMENT '标题', \`summary\` text NOT NULL COMMENT '摘要', \`content\` mediumtext NOT NULL COMMENT '原始内容', \`html\` mediumtext NOT NULL COMMENT '格式化内容', \`catalogue\` json NOT NULL COMMENT '文章目录', \`type\` tinyint NOT NULL COMMENT '文章类型', \`status\` tinyint NOT NULL COMMENT '文章状态', \`istop\` tinyint NOT NULL COMMENT '是否置顶', \`views\` int NOT NULL COMMENT '阅读量' DEFAULT '0', \`likes\` int NOT NULL COMMENT '点赞量' DEFAULT '0', \`publish_at\` datetime NULL COMMENT '发布时间', \`ip\` varchar(150) NULL COMMENT 'IP', \`parent\` int NULL COMMENT '原始文章ID', \`categoryId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`article_tag_relation\` (\`articleEntityId\` int NOT NULL, \`tagEntityId\` int NOT NULL, INDEX \`IDX_a6ad31d715f5c05cd9feda652a\` (\`articleEntityId\`), INDEX \`IDX_b34f4d3a769664e0d16060e288\` (\`tagEntityId\`), PRIMARY KEY (\`articleEntityId\`, \`tagEntityId\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`article_entity\` ADD CONSTRAINT \`FK_0d6c77b96bf8b831aaf7c74ba75\` FOREIGN KEY (\`categoryId\`) REFERENCES \`category_entity\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`article_tag_relation\` ADD CONSTRAINT \`FK_a6ad31d715f5c05cd9feda652a4\` FOREIGN KEY (\`articleEntityId\`) REFERENCES \`article_entity\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE \`article_tag_relation\` ADD CONSTRAINT \`FK_b34f4d3a769664e0d16060e288b\` FOREIGN KEY (\`tagEntityId\`) REFERENCES \`tag_entity\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`article_tag_relation\` DROP FOREIGN KEY \`FK_b34f4d3a769664e0d16060e288b\``);
    await queryRunner.query(`ALTER TABLE \`article_tag_relation\` DROP FOREIGN KEY \`FK_a6ad31d715f5c05cd9feda652a4\``);
    await queryRunner.query(`ALTER TABLE \`article_entity\` DROP FOREIGN KEY \`FK_0d6c77b96bf8b831aaf7c74ba75\``);
    await queryRunner.query(`DROP INDEX \`IDX_b34f4d3a769664e0d16060e288\` ON \`article_tag_relation\``);
    await queryRunner.query(`DROP INDEX \`IDX_a6ad31d715f5c05cd9feda652a\` ON \`article_tag_relation\``);
    await queryRunner.query(`DROP TABLE \`article_tag_relation\``);
    await queryRunner.query(`DROP TABLE \`article_entity\``);
    await queryRunner.query(`DROP TABLE \`tag_entity\``);
    await queryRunner.query(`DROP TABLE \`category_entity\``);
  }
}
