/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-22 13:58:11
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-25 15:03:32
 * @FilePath     : /blog/packages/server/src/common/filters/http-exception.filter.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */
import * as logger from '../logger';
import { Catch, ExceptionFilter, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { constants } from '../index';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const url = request.originalUrl;
    const message = exception.message;
    const errorResponse = {
      code: exception instanceof HttpException ? exception.getStatus() : constants.Code.Unknown,
      success: false,
      message,
      data: null,
    };

    // 设置返回的状态码、请求头、发送错误信息
    response.status(HttpStatus.NOT_IMPLEMENTED);
    response.header('Content-Type', 'application/json; charset=utf-8');
    response.send(errorResponse);
    logger.error.error(url, errorResponse);
  }
}
