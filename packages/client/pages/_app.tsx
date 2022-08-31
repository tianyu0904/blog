/*
 * @Author       : Gao Tianyu tianyu8125@163.com
 * @Date         : 2022-08-31 16:23:33
 * @LastEditors  : Gao Tianyu tianyu8125@163.com
 * @LastEditTime : 2022-08-31 16:33:54
 * @FilePath     : /blog/packages/client/pages/_app.tsx
 * Copyright (c) <2022> <Gao Tianyu>, All Rights Reserved.
 */

import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
