/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-22 14:07:23
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-22 15:27:02
 * @FilePath     : /blog/packages/server/src/common/interceptors/transform.interceptor.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import * as logger from '../logger';
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Response<T> {
  data: T;
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler<T>): Observable<Response<T>> {
    return next.handle().pipe(
      map((data) => {
        const ctx = context.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();

        const statusCode = response.statusCode;
        const url = request.originalUrl;
        const res = {
          statusCode,
          msg: null,
          success: true,
          data,
        };
        logger.request.info(url, res);
        return res;
      }),
    );
  }
}
