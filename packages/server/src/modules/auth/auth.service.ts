/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-21 23:59:51
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-23 17:59:03
 * @FilePath     : /blog/packages/server/src/modules/auth/auth.service.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import * as _ from 'lodash';
import * as dayjs from 'dayjs';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { constants } from '../../common';
import { AuthDTO } from './auth.dto';
import { AccountEntity } from '../account/account.entity';
import { AccountService } from '../account/account.service';

@Injectable()
export class AuthService {
  constructor(private readonly accountService: AccountService, private readonly jwtService: JwtService) {}

  async createToken(id: number | string) {
    const accessToken = await this.jwtService.signAsync({ id, timestramp: dayjs().valueOf() });
    return accessToken;
  }

  async validate(payload: AccountEntity) {
    return await this.accountService.findOneById(payload.id);
  }

  async login(req: constants.IOperationContext, auth: Partial<AuthDTO>) {
    const { email, password } = auth;
    const existAccount = await this.accountService.findOneByEmail(email.toLowerCase());

    if (
      !existAccount ||
      (existAccount.role !== constants.Account.Role.Guest &&
        !(await AccountEntity.comparePassword(password, existAccount.password)))
    ) {
      throw new HttpException('用户名或密码错误', HttpStatus.BAD_REQUEST);
    }

    const token = await this.createToken(existAccount.id);
    const result = _.assign(existAccount, { token });
    return result;
  }
}
