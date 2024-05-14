import connect, {DatabaseConnection, sql} from '@databases/sqlite';
import {init} from './migration';

let db: DatabaseConnection;
let initialized = false;

export const initializeDatabase = async (path: string) => {
  db = db || connect(path);
  if (!initialized) {
    await init(db);
    initialized = true;
  }
  return db;
}

export {sql}