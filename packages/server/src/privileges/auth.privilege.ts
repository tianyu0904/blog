/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-23 13:56:21
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-23 13:58:11
 * @FilePath     : /blog/packages/server/src/common/privileges/auth.privilege.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import { SetMetadata } from '@nestjs/common';

export const Public = () => SetMetadata('isPublic', true);
