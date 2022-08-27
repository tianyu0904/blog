/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-21 23:58:38
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-28 00:05:49
 * @FilePath     : /blog/packages/server/src/modules/auth/auth.guard.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import { Injectable, ExecutionContext, HttpException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { constants } from '../../common';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private readonly reflector: Reflector) {
    super({
      session: false,
      property: '_account',
    });
  }

  getRequest(context: ExecutionContext) {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest();
    return request;
  }

  handleRequest(err, account, info, context: ExecutionContext) {
    if (err || !account) {
      throw new HttpException('Token验证失败', constants.Code.TokenError);
    }
    const isAdmin = !!this.reflector.getAllAndOverride('isAdmin', [context.getHandler()]);
    if (isAdmin && account.role !== constants.Account.Role.Admin) {
      throw new HttpException('没有权限访问', constants.Code.PermissionDend);
    }

    const isWriter = !!this.reflector.getAllAndOverride('isWriter', [context.getHandler()]);
    if (isWriter && account.role !== constants.Account.Role.Writer) {
      throw new HttpException('没有权限访问', constants.Code.PermissionDend);
    }
    return account;
  }

  canActivate(context: ExecutionContext) {
    const isPublic = !!this.reflector.getAllAndOverride('isPublic', [context.getHandler()]);

    return isPublic || super.canActivate(context);
  }
}
