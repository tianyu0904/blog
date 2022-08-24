/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-24 01:41:10
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-24 15:07:56
 * @FilePath     : /blog/packages/server/src/common/constants/mail.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import * as dayjs from 'dayjs';

const blogUrl = 'https://blog.tianyu1994.com';

const getCreateTemplate = (code: string) => {
  const title = '天宇博客-注册验证码邮件';

  const context = `
    <div class="biu-nav-email" style="max-width: 600px;min-width: 300px;margin: 40px auto;box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);font-size: 16px;padding: 20px;background-image: linear-gradient(to right, #9646de 0%, #cb03e4 100%);border-radius: 5px;color: #fff;">
      <h3 style="margin-bottom: 40px;">
        Hi! 亲爱的用户：
      </h3>
      <p style="padding-left: 20px;">
        您正在申请 <b>天宇博客</b> 个人账号，验证码为：
      </p>
      <p style="color: #dde2e2;padding-left: 14px;">
        <strong style="color: #3acbff;font-size: 24px;">
          ${code}
        </strong>
        <span>(为了保障您帐号的安全性,请在30分钟内完成验证,祝您生活愉快!)</span>
        </p>
      <p style="padding-left: 20px;">
        <span>快速访问:</span>
        <a href="${blogUrl}" style="color:#fff" target="_blank" rel="noopener noreferrer">${blogUrl}</a>
      </p>
      <p style="margin-top: 40px;text-align: right;">
        系统邮件，回复无效。
      </p>
      <p style="text-align: right;">
        ${dayjs().format('YYYY-MM-DD HH:mm')}
      </p>
      <p style="text-align: right;">
        站长：Morton Gao
      </p>
    </div>
  `;

  return { title, context };
};

export { getCreateTemplate };
