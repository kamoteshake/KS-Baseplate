import express from 'express';
import cors from 'cors';
import fs from 'node:fs';
import path from 'node:path';
import { json } from 'body-parser';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@as-integrations/express4';
import { createContext } from './graphql/context';
import { typeDefs } from './graphql/schema';
import { resolvers } from './graphql/resolvers';
import { config } from './config';
import { connectToDb } from './db';

export const bootstrap = async () => {
  const app = express();
  app.use(cors());

  const db = await connectToDb();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  app.use(
    '/graphql',
    json(),
    expressMiddleware(server, {
      context: async () => createContext(db),
    }),
  );

  app.get('/healthz', (_req, res) => {
    res.json({ ok: true });
  });

  // Serve built client (if it exists)
  const clientDistPath = path.resolve(__dirname, '../../client/dist');

  if (fs.existsSync(clientDistPath)) {
    app.use(express.static(clientDistPath));

    // SPA fallback – let React Router handle unknown routes
    app.get(/.*/, (_req, res) => {
      res.sendFile(path.join(clientDistPath, 'index.html'));
    });
  } else {
    console.warn('client/dist not found. Skipping static file hosting. Did you run "yarn build"?');
  }

  app.listen(config.port, () => {
    console.log(`🚀 Server ready at http://localhost:${config.port}/graphql`);
  });
};

bootstrap().catch((err) => {
  console.error(err);
  process.exit(1);
});
