import { ApolloAppProvider } from 'apollo/ApolloAppProvider';
import { AppThemeProvider } from 'theme/ThemeProvider';
import { AppRouter } from './router';

export const App: React.FC = () => {
  return (
    <ApolloAppProvider>
      <AppThemeProvider>
        <AppRouter />
      </AppThemeProvider>
    </ApolloAppProvider>
  );
};
