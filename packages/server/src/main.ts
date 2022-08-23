/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-16 00:12:47
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-23 16:27:29
 * @FilePath     : /blog/packages/server/src/main.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import * as compression from 'compression';
import helmet from 'helmet';
import { ClassSerializerInterceptor } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { config } from './config';
import { middlewares, pipes, interceptors, filter } from './common';
import { AppModule } from './app.module';
import { JwtAuthGuard } from './modules/auth/auth.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const reflector = app.get(Reflector);

  app.setGlobalPrefix('api');
  app.use(compression());
  app.use(helmet());
  app.use(new middlewares.ContextMiddleware().use);
  app.useGlobalGuards(new JwtAuthGuard(reflector));
  app.useGlobalInterceptors(new interceptors.TransformInterceptor());
  app.useGlobalPipes(new pipes.ValidationPipe());
  app.useGlobalInterceptors(new ClassSerializerInterceptor(reflector));
  app.useGlobalFilters(new filter.HttpExceptionFilter());
  await app.listen(config.port);
  console.log(`Server running at http://127.0.0.1:${config.port}`);
}
bootstrap();
