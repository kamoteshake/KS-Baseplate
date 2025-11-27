import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import { AuthenticatedApolloProvider } from 'apollo/AuthenticatedApolloProvider';
import { App } from './App';

// Material UI – Roboto font
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const domain = import.meta.env.VITE_AUTH0_DOMAIN as string;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID as string;
const audience = import.meta.env.VITE_AUTH0_AUDIENCE as string;

// Optional safety check for missing env vars
if (!domain || !clientId) {
  console.warn(
    '[Auth0] VITE_AUTH0_DOMAIN or VITE_AUTH0_CLIENT_ID is missing. Authentication will not work.',
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        audience,
        redirect_uri: window.location.origin,
      }}
    >
      <AuthenticatedApolloProvider>
        <App />
      </AuthenticatedApolloProvider>
    </Auth0Provider>
  </React.StrictMode>,
);
