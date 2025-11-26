import type { Db } from 'mongodb';

export interface GraphQLContext {
  db: Db;
}

export const createContext = (db: Db): GraphQLContext => ({ db });
