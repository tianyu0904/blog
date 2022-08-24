/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-24 01:39:27
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-24 14:56:34
 * @FilePath     : /blog/packages/server/src/common/utils/mailer.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import { createTransport } from 'nodemailer';
import { config } from '../../config';

class MailService {
  private mailer;
  constructor() {
    this.mailer = createTransport(config.mail);
  }

  sendMail(to: string[], subject: string, context: string) {
    const messageInfo = {
      from: { name: config.mail.auth.name, address: config.mail.auth.user },
      to,
      subject,
      html: context,
    };
    return this.mailer.sendMail(messageInfo);
  }
}

export const Mail = new MailService();
