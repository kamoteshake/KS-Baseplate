import { auth } from 'express-oauth2-jwt-bearer';
import { config } from './config';

export const requireAuth = auth({
  issuerBaseURL: `https://${config.auth0Domain}/`,
  audience: config.auth0Audience,
});
