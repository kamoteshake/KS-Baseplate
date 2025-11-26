import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react';
import { Typography, Container, Button, CircularProgress, Alert, Stack } from '@mui/material';

import { TodoSection } from 'components/TodoSection';
import { useColorMode } from 'theme/ThemeProvider';

const HELLO_QUERY = gql`
  query Hello {
    hello
  }
`;

interface HelloQueryData {
  hello: string;
}

export const Home: React.FC = () => {
  const { setting, effectiveMode, toggleColorMode } = useColorMode();
  const { data, loading, error } = useQuery<HelloQueryData>(HELLO_QUERY);

  const label =
    setting === 'system'
      ? `System (${effectiveMode === 'light' ? 'Light' : 'Dark'})`
      : effectiveMode === 'light'
        ? 'Light'
        : 'Dark';

  return (
    <Container sx={{ py: 4 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4" component="h1">
          Full Stack Template
        </Typography>

        <Button variant="outlined" onClick={toggleColorMode}>
          Theme: {label}
        </Button>
      </Stack>

      <Typography variant="body1" gutterBottom>
        Client: React + Vite + MUI + Apollo Client
      </Typography>
      <Typography variant="body1" gutterBottom>
        Server: Express + Apollo Server + MongoDB
      </Typography>

      <Stack spacing={2} mt={3}>
        <Typography variant="h6">Hello from the API:</Typography>

        {loading && (
          <Stack direction="row" alignItems="center" spacing={1}>
            <CircularProgress size={20} />
            <Typography variant="body2">Loading...</Typography>
          </Stack>
        )}

        {error && <Alert severity="error">Error loading data: {error.message}</Alert>}

        {data && <Alert severity="success">{data.hello}</Alert>}
      </Stack>

      <TodoSection />
    </Container>
  );
};
