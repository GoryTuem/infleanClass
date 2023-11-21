import type { AppProps } from "next/app";
import Layout from "../src/component/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import Head from "next/head";
function MyApp({ Component }: AppProps): JSX.Element {
  return (
    <>
      <Global styles={globalStyles} />
      <Head>
        <title>Women Snap</title>
        <meta name="description" content="패션이 쉬워진다. 우먼스냅" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component />
      </Layout>
    </>
  );
}

export default MyApp;
