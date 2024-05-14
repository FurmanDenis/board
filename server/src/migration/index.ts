import { DatabaseConnection } from '@databases/sqlite';
import {up as eventsUp} from './events';
import {up as usersUp} from './users';

export async function init(db: DatabaseConnection) {
  await eventsUp(db);
  await usersUp(db);
}