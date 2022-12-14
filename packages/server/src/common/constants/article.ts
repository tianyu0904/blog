/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-18 12:43:52
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-28 01:53:09
 * @FilePath     : /blog/packages/server/src/common/constants/article.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

export enum Type {
  Draft = 0,
  Public,
  Private,
}

export enum Status {
  Archived = -1,
  Waiting,
  Pending,
  Approve,
  Reject,
}

export type Catalogue = {
  level: number;
  text: string;
};
