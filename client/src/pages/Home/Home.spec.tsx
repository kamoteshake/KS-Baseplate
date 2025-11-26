import { render, screen } from '@testing-library/react';
import { ApolloProvider } from '@apollo/client/react';
import { AppThemeProvider } from 'theme/ThemeProvider';
import { apolloClient } from 'src/apolloClient';
import { Home } from '.';

describe('Home page', () => {
  it('renders the main heading', () => {
    render(
      <ApolloProvider client={apolloClient}>
        <AppThemeProvider>
          <Home />
        </AppThemeProvider>
      </ApolloProvider>,
    );

    expect(screen.getByRole('heading', { name: /full stack template/i })).toBeInTheDocument();
  });
});
