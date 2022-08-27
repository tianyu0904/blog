/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-27 00:39:41
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-28 01:55:28
 * @FilePath     : /blog/packages/server/src/common/utils/markdown.ts
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import HighLight from 'highlight.js';
import { marked } from 'marked';

class Marked {
  private renderer;
  constructor() {
    this.renderer = new marked.Renderer();
    marked.setOptions({
      highlight: (code: string, language: string) => {
        if (HighLight.getLanguage(language)) {
          return HighLight.highlight(language, code).value;
        } else {
          return HighLight.highlightAuto(code).value;
        }
      },
      renderer: this.renderer,
    });
  }

  mdToHtml(content: string) {
    const toc = [];

    this.renderer.heading = (text: string, level: number) => {
      toc.push({ level, text });
    };

    const html = marked.parser(marked.lexer(content)).replace(/<pre>/gi, '<pre class="hljs">');

    return { html, toc };
  }
}

export const MarkDown = new Marked();
