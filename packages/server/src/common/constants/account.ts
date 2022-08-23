/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-16 17:19:30
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-23 11:50:30
 * @FilePath     : /blog/packages/server/src/common/constants/account.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

export enum Gender {
  Unknown = 0,
  Male,
  Female,
}

export enum Role {
  Guest = -1,
  Admin,
  Normal,
}

export enum Status {
  Active = 0,
  Locked,
}

export enum Platform {
  GitHub = 0,
  QQ,
}

export type LinkInfo = {
  platform: Platform;
  url: string;
};
