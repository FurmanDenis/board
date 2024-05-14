import { DatabaseConnection } from '@databases/sqlite';
import {sql} from '../database';

export async function up(db: DatabaseConnection) {
await db.query(sql`
    CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        dob TIMESTAMP NOT NULL,
        source TEXT NOT NULL,
        event_id TEXT NOT NULL
    );
`)
}

export async function down(db: DatabaseConnection) {
  await db.query(sql`DROP TABLE IF EXISTS users`)
}