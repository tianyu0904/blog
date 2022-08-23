/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-21 23:58:38
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-23 16:45:11
 * @FilePath     : /blog/packages/server/src/modules/auth/auth.guard.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';

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

  handleRequest(err, account) {
    if (err || !account) {
      throw new UnauthorizedException('Token验证失败');
    }
    return account;
  }

  canActivate(context: ExecutionContext) {
    const isPublic = !!this.reflector.getAllAndOverride('isPublic', [context.getHandler()]);

    return isPublic || super.canActivate(context);
  }
}
