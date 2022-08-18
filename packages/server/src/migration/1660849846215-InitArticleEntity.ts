import { MigrationInterface, QueryRunner } from "typeorm";

export class InitArticleEntity1660849846215 implements MigrationInterface {
    name = 'InitArticleEntity1660849846215'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`category_entity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp NOT NULL COMMENT '创建时间', \`created_by\` int NOT NULL COMMENT '创建者', \`updated_at\` timestamp NULL COMMENT '修改时间', \`updated_by\` int NULL COMMENT '修改者', \`deleted_at\` timestamp NULL COMMENT '删除时间', \`deleted_by\` int NULL COMMENT '删除者', \`belong\` int NOT NULL COMMENT '所属博主', \`name\` varchar(20) NOT NULL COMMENT '分类名称', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tag_entity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp NOT NULL COMMENT '创建时间', \`created_by\` int NOT NULL COMMENT '创建者', \`updated_at\` timestamp NULL COMMENT '修改时间', \`updated_by\` int NULL COMMENT '修改者', \`deleted_at\` timestamp NULL COMMENT '删除时间', \`deleted_by\` int NULL COMMENT '删除者', \`belong\` int NOT NULL COMMENT '所属博主', \`name\` varchar(20) NOT NULL COMMENT '标签名称', \`color\` varchar(10) NOT NULL COMMENT '标签颜色', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`article_entity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp NOT NULL COMMENT '创建时间', \`created_by\` int NOT NULL COMMENT '创建者', \`updated_at\` timestamp NULL COMMENT '修改时间', \`updated_by\` int NULL COMMENT '修改者', \`deleted_at\` timestamp NULL COMMENT '删除时间', \`deleted_by\` int NULL COMMENT '删除者', \`belong\` int NOT NULL COMMENT '所属博主', \`title\` varchar(50) NOT NULL COMMENT '标题', \`summary\` text NOT NULL COMMENT '摘要', \`context\` mediumtext NOT NULL COMMENT '原始内容', \`html\` mediumtext NOT NULL COMMENT '格式化内容', \`toc\` text NOT NULL COMMENT '格式化内容索引', \`type\` tinyint NOT NULL COMMENT '文章类型', \`views\` int NOT NULL COMMENT '阅读量' DEFAULT '0', \`likes\` int NOT NULL COMMENT '点赞量' DEFAULT '0', \`publish_at\` timestamp NOT NULL COMMENT '发布时间', \`categoryId\` int NOT NULL COMMENT '分类ID', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`article_entity\` ADD CONSTRAINT \`FK_0d6c77b96bf8b831aaf7c74ba75\` FOREIGN KEY (\`categoryId\`) REFERENCES \`category_entity\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`article_entity\` DROP FOREIGN KEY \`FK_0d6c77b96bf8b831aaf7c74ba75\``);
        await queryRunner.query(`DROP TABLE \`article_entity\``);
        await queryRunner.query(`DROP TABLE \`tag_entity\``);
        await queryRunner.query(`DROP TABLE \`category_entity\``);
    }

}
