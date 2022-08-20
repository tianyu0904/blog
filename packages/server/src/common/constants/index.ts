/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-16 16:35:29
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-21 00:37:36
 * @FilePath     : /blog/packages/server/src/common/constants/index.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import * as User from './user';
import * as Article from './article';

export enum Is {
  No = 0,
  Yes,
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
}

export { User, Article };
