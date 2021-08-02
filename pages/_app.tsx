import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";

import "@/styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>eat what?</title>
        <meta
          name="description"
          content="A developer's attempt at addressing the daily struggle of 'what are we going to eat today?"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
