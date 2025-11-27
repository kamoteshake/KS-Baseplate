// client/src/components/AuthButtons/AuthButtons.tsx
import { useMemo } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Avatar, Button, Stack, Tooltip, Typography, CircularProgress } from '@mui/material';

const getInitials = (name?: string | null, email?: string | null): string => {
  if (name) {
    const parts = name.trim().split(' ');
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
    return parts[0].charAt(0).toUpperCase() + parts[parts.length - 1].charAt(0).toUpperCase();
  }

  if (email) return email.charAt(0).toUpperCase();
  return '?';
};

export const AuthButtons = () => {
  const { isAuthenticated, isLoading, loginWithRedirect, logout, user } = useAuth0();

  const initials = useMemo(() => getInitials(user?.name, user?.email), [user?.name, user?.email]);

  if (isLoading) {
    return (
      <Stack direction="row" alignItems="center" spacing={1}>
        <CircularProgress size={18} />
      </Stack>
    );
  }

  if (!isAuthenticated) {
    return (
      <Button variant="outlined" color="inherit" size="small" onClick={() => loginWithRedirect()}>
        Log in
      </Button>
    );
  }

  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      {user && (
        <Tooltip
          title={
            <Stack>
              {user.name && <Typography variant="body2">{user.name}</Typography>}
              {user.email && (
                <Typography variant="caption" color="text.secondary">
                  {user.email}
                </Typography>
              )}
            </Stack>
          }
        >
          <Avatar
            src={user.picture ?? undefined}
            alt={user.name ?? user.email ?? 'User'}
            sx={{ width: 32, height: 32 }}
          >
            {!user.picture && initials}
          </Avatar>
        </Tooltip>
      )}

      <Button
        variant="outlined"
        color="inherit"
        size="small"
        onClick={() =>
          logout({
            logoutParams: { returnTo: window.location.origin },
          })
        }
      >
        Log out
      </Button>
    </Stack>
  );
};
