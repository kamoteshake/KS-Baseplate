import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client';

const graphqlUrl = import.meta.env.VITE_GRAPHQL_URL ?? 'http://localhost:4000/graphql';

if (!import.meta.env.VITE_GRAPHQL_URL) {
  console.warn(
    '[Apollo] VITE_GRAPHQL_URL is not defined. Falling back to http://localhost:4000/graphql.',
  );
}

export const httpLink = new HttpLink({
  uri: graphqlUrl,
});

export const cache = new InMemoryCache();

export const createApolloClient = (link?: ApolloLink) =>
  new ApolloClient({
    link: link ?? httpLink,
    cache,
  });
