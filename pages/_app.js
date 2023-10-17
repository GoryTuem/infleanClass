import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

function MyApp({ Component }) {
  const client = new ApolloClient({
    //api 주소 등록
    uri: "http://practice.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Component />
    </ApolloProvider>
  );
}

export default MyApp;
