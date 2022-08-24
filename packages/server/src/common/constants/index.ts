/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-16 16:35:29
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-24 15:15:20
 * @FilePath     : /blog/packages/server/src/common/constants/index.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import * as Account from './account';
import * as Article from './article';
import * as Mail from './mail';

import { AccountEntity } from '../../modules/account/account.entity';

export enum Is {
  No = 0,
  Yes,
}

export enum MessageMode {
  email = 0,
  phone,
}

export class IOperationContext {
  _t: number;

  _oid: string;

  _path: string;

  _account: AccountEntity;
}

export class OD {
  private _oid?: string;
  public get oid(): string {
    return this._oid;
  }

  private _uid?: number;
  public get uid(): number {
    return this._uid;
  }

  private _path?: string;
  public get path(): string {
    return this._path;
  }

  constructor(oid?: string, uid?: number, path?: string) {
    this._oid = oid;
    this._uid = uid;
    this._path = path;
  }

  static from(oc: IOperationContext): OD {
    return new OD(oc._oid, oc._account && oc._account.id, oc._path);
  }
}

export { Account, Article, Mail };
