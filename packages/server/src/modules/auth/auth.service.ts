/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-21 23:59:51
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-25 22:17:53
 * @FilePath     : /blog/packages/server/src/modules/auth/auth.service.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import * as _ from 'lodash';
import * as dayjs from 'dayjs';
import { Injectable, HttpException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { constants, utils } from '../../common';
import { NormalAuthDTO, PhoneAuthDto, PhoneCodeDTO } from './auth.dto';
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

  async loginGuest() {
    const account = await this.accountService.findOneById(100000);
    const token = await this.createToken(account.id);
    const result = _.assign(account, { token });
    return result;
  }

  async loginNormal(req: constants.IOperationContext, normalAuth: Partial<NormalAuthDTO>) {
    const { email, password } = normalAuth;
    const existAccount = await this.accountService.findOneByEmail(email.toLowerCase());

    if (!existAccount || !(await AccountEntity.comparePassword(password, existAccount.password))) {
      throw new HttpException('用户名和密码不匹配', constants.Code.AuthFail);
    }

    const token = await this.createToken(existAccount.id);
    const result = _.assign(existAccount, { token });
    return result;
  }

  async loginPhone(req: constants.IOperationContext, phoneAuth: Partial<PhoneAuthDto>) {
    const { phone, code } = phoneAuth;
    const existAccount = await this.accountService.findOneByPhone(phone);

    if (!existAccount) {
      throw new HttpException('账号不存在', constants.Code.AccountExist);
    }

    const redisKey = constants.RedisPrefix.loginPhonePIN + phone;
    const redisCode = await utils.RedisClient.get(redisKey);

    if (code !== redisCode) {
      throw new HttpException('验证码错误', constants.Code.CodeError);
    }

    const token = await this.createToken(existAccount.id);
    const result = _.assign(existAccount, { token });
    return result;
  }

  async phoneCode(req: constants.IOperationContext, phoneCode: Partial<PhoneCodeDTO>) {
    const { phone } = phoneCode;

    const existAccount = await this.accountService.findOneByPhone(phone);

    if (existAccount) {
      throw new HttpException('账号已存在', constants.Code.AccountExist);
    }

    const code = utils.randomNumber();
    const redisKey = constants.RedisPrefix.loginPhonePIN + phone;
    await utils.RedisClient.setex(redisKey, 5 * 60, code);
    return true;
  }
}
