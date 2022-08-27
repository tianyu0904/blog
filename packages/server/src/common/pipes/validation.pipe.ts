/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-22 14:21:31
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-27 23:54:35
 * @FilePath     : /blog/packages/server/src/common/pipes/validation.pipe.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import * as logger from '../logger';
import { Injectable, PipeTransform, ArgumentMetadata, HttpException } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { constants } from '../index';

@Injectable()
export class ValidationPipe implements PipeTransform {
  async transform(value, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      // 如果没有传入验证规则，则不验证，直接返回数据
      return value;
    }
    // 将对象转换为 Class 来验证
    const object = plainToClass(metatype, value);
    const errors = await validate(object);
    if (errors.length > 0) {
      // 只需要取第一个错误信息并返回即可
      const msgArray = Object.values(errors[0].constraints);
      const msg = msgArray[msgArray.length - 1];
      logger.error.error(`Validation failed: ${msg}`);
      throw new HttpException(msg, constants.Code.InvalidInput);
    }
    return value;
  }

  private toValidate(metatype): boolean {
    const types = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
