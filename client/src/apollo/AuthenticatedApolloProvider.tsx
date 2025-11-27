import { ReactNode, useMemo } from 'react';
import { ApolloLink } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import { SetContextLink } from '@apollo/client/link/context';
import { useAuth0 } from '@auth0/auth0-react';
import { httpLink, createApolloClient } from './client';

type AuthenticatedApolloProviderProps = {
  children: ReactNode;
};

export function AuthenticatedApolloProvider({ children }: AuthenticatedApolloProviderProps) {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  const client = useMemo(() => {
    const authLink = new SetContextLink(async (prevContext) => {
      // If user isn’t logged in, just pass existing headers through
      if (!isAuthenticated) {
        return {
          headers: prevContext.headers,
        };
      }

      try {
        const token = await getAccessTokenSilently();

        return {
          headers: {
            ...(prevContext.headers ?? {}),
            authorization: token ? `Bearer ${token}` : '',
          },
        };
      } catch (error) {
        console.error('Error getting Auth0 access token:', error);
        // Fail gracefully: no auth header, but request still goes out
        return {
          headers: prevContext.headers,
        };
      }
    });

    const link: ApolloLink = authLink.concat(httpLink);

    return createApolloClient(link);
  }, [isAuthenticated, getAccessTokenSilently]);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
