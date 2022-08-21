/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-22 00:11:41
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-22 01:50:17
 * @FilePath     : /blog/packages/server/src/modules/auth/auth.module.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { config } from '../../config';
import { AccountModule } from '../account/account.module';
import { JwtStrategy } from './jwt.strategy';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

const passModule = PassportModule.register({ defaultStrategy: 'jwt' });
const jwtModule = JwtModule.register({
  secret: config.jwtSecret,
  signOptions: { expiresIn: '4h' },
});

@Module({
  imports: [passModule, jwtModule, AccountModule],
  providers: [JwtStrategy, AuthService],
  controllers: [AuthController],
  exports: [passModule, jwtModule],
})
export class AuthModule {}
