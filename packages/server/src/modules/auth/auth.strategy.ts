/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-21 23:57:21
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-25 15:24:50
 * @FilePath     : /blog/packages/server/src/modules/auth/auth.strategy.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import { Injectable, HttpException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { config } from '../../config';
import { constants } from '../../common';
import { AuthService } from './auth.service';
import { AccountEntity } from '../account/account.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.jwtSecret,
    });
  }

  async validate(payload: AccountEntity) {
    const account = await this.authService.validate(payload);

    if (!account) {
      throw new HttpException('获取用户信息失败', constants.Code.TokenError);
    }
    return account;
  }
}
