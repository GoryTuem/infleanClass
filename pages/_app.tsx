import type { AppProps } from "next/app";
import Layout from "../src/commons/layout";
import ApolloSetting from "../src/component/commons/apollo";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
function MyApp({ Component }: AppProps): JSX.Element {
  return (
    <ApolloSetting>
      <>
        <Global styles={globalStyles} />
        <Layout>
          <Component />
        </Layout>
      </>
    </ApolloSetting>
  );
}

export default MyApp;
