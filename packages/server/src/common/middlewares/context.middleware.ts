/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-23 16:07:55
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-23 16:40:15
 * @FilePath     : /blog/packages/server/src/common/middlewares/context.middleware.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import * as _ from 'lodash';
import { Injectable, NestMiddleware, BadRequestException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { guid } from '../utils';

@Injectable()
export class ContextMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const t = req.query._t;
    if (!t) {
      throw new BadRequestException(`url need query: _t`);
    }
    _.assign(req, { _oid: guid(), _path: req.originalUrl, _t: t });
    next();
  }
}
