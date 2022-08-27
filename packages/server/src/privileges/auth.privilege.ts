/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-23 13:56:21
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-28 00:00:15
 * @FilePath     : /blog/packages/server/src/privileges/auth.privilege.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import { SetMetadata } from '@nestjs/common';

export const Public = () => SetMetadata('isPublic', true);

export const Writer = () => SetMetadata('isWriter', true);

export const Admin = () => SetMetadata('isAdmin', true);
