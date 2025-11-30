import { render, screen } from '@testing-library/react';
import { ApolloAppProvider } from 'apollo/ApolloAppProvider';
import { AppThemeProvider } from 'theme/ThemeProvider';
import { Home } from '.';

describe('Home page', () => {
  it('renders the main heading', () => {
    render(
      <ApolloAppProvider>
        <AppThemeProvider>
          <Home />
        </AppThemeProvider>
      </ApolloAppProvider>,
    );

    expect(screen.getByRole('heading', { name: /full stack template/i })).toBeInTheDocument();
  });
});
