import type { Db } from 'mongodb';

export interface GraphQLContext {
  db: Db;
  user: Record<string, unknown> | null;
}

export const createContext = (db: Db, user: Record<string, unknown> | null): GraphQLContext => ({
  db,
  user,
});
