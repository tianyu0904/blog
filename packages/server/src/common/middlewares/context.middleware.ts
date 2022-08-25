/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-23 16:07:55
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-25 18:17:03
 * @FilePath     : /blog/packages/server/src/common/middlewares/context.middleware.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import * as _ from 'lodash';
import { Injectable, NestMiddleware, HttpException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { constants, utils } from '../index';

@Injectable()
export class ContextMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const t = req.query._t;
    if (!t) {
      throw new HttpException(`url need query: _t`, constants.Code.InvalidInput);
    }
    _.assign(req, { _oid: utils.guid(), _path: req.originalUrl, _t: t });
    next();
  }
}
