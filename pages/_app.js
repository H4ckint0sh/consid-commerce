/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import { useEffect } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import Head from 'next/head';

import '../styles/globals.css';

// redux
import { Provider } from 'react-redux';
import store from '../redux/store';

import Layout from '../components/Layout';
import ThemeWrapper from '../theme/ThemeWrapper';

export default function MyApp(props) {
  const { Component, pageProps } = props;

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Provider store={store}>
        <ThemeWrapper>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeWrapper>
      </Provider>
    </>
  );
}
