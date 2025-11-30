import { ApolloProvider } from '@apollo/client/react';
import { apolloClient } from 'apollo/client';

type ApolloAppProviderProps = {
  children: React.ReactNode;
};

export const ApolloAppProvider = ({ children }: ApolloAppProviderProps) => {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};
