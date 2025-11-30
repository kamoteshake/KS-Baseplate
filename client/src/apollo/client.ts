import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const apiUrl = import.meta.env.VITE_GRAPHQL_URL;

if (!apiUrl) {
  throw new Error('VITE_GRAPHQL_URL is not defined. Did you create client/.env?');
}

export const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: apiUrl,
  }),
  cache: new InMemoryCache(),
});
