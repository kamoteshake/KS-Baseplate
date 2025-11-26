import { ApolloProvider } from '@apollo/client/react';
import { apolloClient } from './apolloClient';
import { AppRouter } from './router';
import { AppThemeProvider } from 'theme/ThemeProvider';

export const App: React.FC = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <AppThemeProvider>
        <AppRouter />
      </AppThemeProvider>
    </ApolloProvider>
  );
};
