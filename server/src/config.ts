import dotenv from 'dotenv';

dotenv.config();

const auth0Domain = process.env.AUTH0_DOMAIN;
const auth0Audience = process.env.AUTH0_AUDIENCE;

if (!auth0Domain || !auth0Audience) {
  throw new Error(
    'AUTH0_DOMAIN and AUTH0_AUDIENCE are required. This application is configured to use Auth0 authentication.',
  );
}

export const config = {
  port: Number(process.env.PORT ?? 4000),
  mongoUri: process.env.MONGO_URI ?? 'mongodb://127.0.0.1:27017/fullstack_template',

  auth0Domain,
  auth0Audience,
};
