import { AppThemeProvider } from 'theme/ThemeProvider';
import { AppRouter } from './router';

export const App: React.FC = () => {
  return (
    <AppThemeProvider>
      <AppRouter />
    </AppThemeProvider>
  );
};
