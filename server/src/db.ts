import { MongoClient, Db } from 'mongodb';
import { config } from './config';

let client: MongoClient | null = null;
let db: Db | null = null;

export const connectToDb = async (): Promise<Db> => {
  if (db) return db;

  if (!config.mongoUri) {
    throw new Error('MONGO_URI is not defined');
  }

  client = new MongoClient(config.mongoUri);
  await client.connect();
  db = client.db(); // uses DB name from the URI

  console.log('🗄️  Connected to MongoDB');
  return db;
};

export const getDb = (): Db => {
  if (!db) {
    throw new Error('Database not initialized. Call connectToDb() first.');
  }
  return db;
};
