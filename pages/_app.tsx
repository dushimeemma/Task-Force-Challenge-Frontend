import React from 'react';
import { AppProps } from 'next/app';

import '../styles/globals.css';
import { wrapper } from '../store';

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(App);
