import React from "react";
import { GlobalStyle } from "../assets/styles/global.style";
import { AppProps } from "next/app";
import {AuthProvider} from "../contexts/auth/auth.provider";

export default ({ Component, pageProps }: AppProps) => (
  <AuthProvider>
    <Component {...pageProps} />
    <GlobalStyle />
  </AuthProvider>
);
