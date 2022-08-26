/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-16 16:35:29
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-26 18:07:25
 * @FilePath     : /blog/packages/server/src/common/constants/index.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import * as Account from './account';
import * as Article from './article';
import * as MailTemplate from './mail';

import { AccountEntity } from '../../modules/account/account.entity';

export enum Is {
  No = 0,
  Yes,
}

export const Color_12: string[] = [
  '#E32322',
  '#F4E500',
  '#2671B2',
  '#008E5B',
  '#F19101',
  '#6D3889',
  '#FDC60B',
  '#EA621F',
  '#C4037D',
  '#444E99',
  '#0696BB',
  '#0696BB',
];

export const Color_20: string[] = [
  '#FF9E6D',
  '#A77B64',
  '#DBDBDB',
  '#B9B8B8',
  '#616161',
  '#FFAD9E',
  '#F577A8',
  '#C873ED',
  '#9E79DB',
  '#7986DB',
  '#86CBFF',
  '#6DCEFF',
  '#3DE1FF',
  '#00DBC2',
  '#94D894',
  '#C2E5A0',
  '#E2EC81',
  '#FFF666',
  '#FFE26D',
  '#FFC56D',
];

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

export { Account, Article, MailTemplate };

export * from './code';
export * from './redis';
