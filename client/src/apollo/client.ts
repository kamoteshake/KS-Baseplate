import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client';

export const httpLink = new HttpLink({
  uri: import.meta.env.VITE_GRAPHQL_URL,
  // credentials: "include", // uncomment if/when you need cookies
});

export const cache = new InMemoryCache();
// put typePolicies here later if needed

export function createApolloClient(link?: ApolloLink) {
  return new ApolloClient({
    link: link ?? httpLink,
    cache,
  });
}
