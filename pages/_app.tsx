import type { AppProps } from "next/app";
import Layout from "../src/component/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
function MyApp({ Component }: AppProps): JSX.Element {
  return (
    <>
      <Global styles={globalStyles} />
      <Layout>
        <Component />
      </Layout>
    </>
  );
}

export default MyApp;
