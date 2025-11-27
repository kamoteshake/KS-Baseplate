import { ReactNode, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Box, Button, CircularProgress, Paper, Stack, Typography } from '@mui/material';

type RequireAuthProps = {
  children: ReactNode;
  /**
   * If true, unauthenticated users are immediately redirected to Auth0.
   * If false (default), they see a friendly message + Login button.
   */
  autoRedirect?: boolean;
};

export const RequireAuth = ({ children, autoRedirect = false }: RequireAuthProps) => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (!isLoading && !isAuthenticated && autoRedirect) {
      void loginWithRedirect();
    }
  }, [isLoading, isAuthenticated, autoRedirect, loginWithRedirect]);

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!isAuthenticated && !autoRedirect) {
    // Soft gate: show a call-to-action instead of auto-redirecting
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
        <Paper
          elevation={2}
          sx={{
            px: 3,
            py: 2,
            maxWidth: 480,
            width: '100%',
          }}
        >
          <Stack spacing={2} alignItems="flex-start">
            <Typography variant="h6">Sign in required</Typography>
            <Typography variant="body2" color="text.secondary">
              You need to be logged in to view this section.
            </Typography>
            <Button variant="contained" onClick={() => loginWithRedirect()} size="small">
              Log in
            </Button>
          </Stack>
        </Paper>
      </Box>
    );
  }

  if (!isAuthenticated && autoRedirect) {
    // We’ve already kicked off loginWithRedirect; nothing to render
    return null;
  }

  return <>{children}</>;
};
