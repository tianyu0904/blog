/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-19 14:08:49
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-25 22:55:59
 * @FilePath     : /blog/packages/server/src/modules/account/account.service.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import { Injectable, HttpException } from '@nestjs/common';
import { constants, utils } from '../../common';
import { RegisterCodeDTO, RegisterDTO } from './account.dto';
import { AccountEntity } from './account.entity';
import { AccountRepository } from './account.repository';

@Injectable()
export class AccountService {
  constructor(private readonly accountRepo: AccountRepository) {}

  async findOneById(id: number) {
    return this.accountRepo.findOneBy({ id });
  }

  async findOneByNickname(nickname: string) {
    return this.accountRepo.findOneBy({ nickname });
  }

  async findOneByEmail(email: string) {
    return this.accountRepo.findOneBy({ email });
  }

  async findOneByPhone(phone: string) {
    return this.accountRepo.findOneBy({ phone });
  }

  public async sendRegisterCode(req: constants.IOperationContext, registerCode: Partial<RegisterCodeDTO>) {
    const { email } = registerCode;

    const existAccount = await this.accountRepo.findOneBy({ email });

    if (existAccount) {
      throw new HttpException('账号已存在', constants.Code.AccountExist);
    }

    const code = utils.randomNumber();
    const redisKey = constants.RedisPrefix.createAccountPIN + email;
    await utils.RedisClient.setex(redisKey, 5 * 60, code);
    const { title, context } = constants.MailTemplate.getCreateTemplate(code);
    utils.Mail.sendMail([email], title, context);
    return true;
  }

  public async create(req: constants.IOperationContext, register: Partial<RegisterDTO>) {
    const od = constants.OD.from(req);
    const { email, password, code } = register;
    const existAccount = await this.accountRepo.findOneBy({ email: email });

    if (existAccount) {
      throw new HttpException('账号已存在', constants.Code.AccountExist);
    }

    const redisKey = constants.RedisPrefix.createAccountPIN + email;
    const redisCode = await utils.RedisClient.get(redisKey);

    if (code !== redisCode) {
      throw new HttpException('验证码错误', constants.Code.CodeError);
    }

    const newAccount = await this.accountRepo.create({
      nickname: '注册用户' + utils.randomString(),
      email: email.toLowerCase(),
      password,
    });

    newAccount.password = await AccountEntity.encryptPassword(newAccount.password);
    await this.accountRepo.saveWithOd(od, newAccount);
    return newAccount;
  }
}
