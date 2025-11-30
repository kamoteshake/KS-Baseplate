import { render, screen } from '@testing-library/react';
import { AppThemeProvider } from 'theme/ThemeProvider';
import { AuthenticatedApolloProvider } from 'apollo/AuthenticatedApolloProvider';
import { Home } from '.';

describe('Home page', () => {
  it('renders the main heading', () => {
    render(
      <AuthenticatedApolloProvider>
        <AppThemeProvider>
          <Home />
        </AppThemeProvider>
      </AuthenticatedApolloProvider>,
    );

    expect(screen.getByRole('heading', { name: /full stack template/i })).toBeInTheDocument();
  });
});
