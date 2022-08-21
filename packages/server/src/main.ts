/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-16 00:12:47
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-22 01:04:35
 * @FilePath     : /blog/packages/server/src/main.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import * as compression from 'compression';
import helmet from 'helmet';
import { NestFactory } from '@nestjs/core';
import { config } from './config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.use(compression());
  app.use(helmet());
  await app.listen(config.port);
  console.log(`Server running at http://127.0.0.1:${config.port}`);
}
bootstrap();
