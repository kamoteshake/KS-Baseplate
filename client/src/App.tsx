import { AppRouter } from './router';
import { AppThemeProvider } from 'theme/ThemeProvider';

export const App: React.FC = () => {
  return (
    <AppThemeProvider>
      <AppRouter />
    </AppThemeProvider>
  );
};
