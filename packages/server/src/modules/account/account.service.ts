/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-19 14:08:49
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-21 01:54:54
 * @FilePath     : /blog/packages/server/src/modules/account/account.service.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import * as _ from 'lodash';
import { Injectable, ExecutionContext, UnauthorizedException, HttpException, HttpStatus } from '@nestjs/common';
import { AuthGuard, PassportStrategy } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { constants } from '../../common';
import { AccountEntity } from './account.entity';
import { AccountRepository } from './account.repository';

@Injectable()
export class AccountService {
  constructor(private readonly accountRepo: AccountRepository, private readonly jwtService: JwtService) {}

  private createToken(id: number) {
    const accessToken = this.jwtService.sign({ id, timestamp: Date.now() });
    return accessToken;
  }

  public async login(account: Partial<AccountEntity>) {
    const { email, password } = account;
    const existUser = await this.accountRepo.findOneBy({ email });

    if (!existUser || !(await AccountEntity.comparePassword(password, existUser.password))) {
      throw new HttpException('用户名或密码错误', HttpStatus.BAD_REQUEST);
    }

    const token = this.createToken(existUser.id);

    return _.assign(existUser, { token });
  }

  public async create(account: Partial<AccountEntity>): Promise<AccountEntity> {
    const od = new constants.OD();
    const { email } = account;
    const existAccount = await this.accountRepo.findOneBy({ email });

    if (existAccount) {
      throw new HttpException('邮箱已被注册', HttpStatus.BAD_REQUEST);
    }

    const newAccount = await this.accountRepo.create(account);
    newAccount.password = await AccountEntity.encryptPassword(newAccount.password);
    await this.accountRepo.saveWithOd(od, newAccount);
    return newAccount;
  }
}

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  getRequest(context: ExecutionContext) {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest();
    return request;
  }

  handleRequest(err, account) {
    if (err || !account) {
      throw new UnauthorizedException('身份验证失败');
    }
    return account;
  }
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly accountService: AccountService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'blog',
    });
  }
}
