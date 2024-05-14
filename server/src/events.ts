import { type DatabaseConnection, sql } from "@databases/sqlite";

const events: Event[] = [];
const users: User[] = [];

interface Event {
    id: number;
    title: string;
    description: string;
    date_start: Date;
    }

    interface User {
        id: number,
        name: string,
        email: string,
        event_id: [],
        dob: Date,
        source: string,
    }


export async function getEvents(db: DatabaseConnection) {
    const items =  await db.query(sql`SELECT * FROM events`);
    return items;
}

export async function getUsersById(db: DatabaseConnection, id: number) {
   return await db.query(sql`SELECT * FROM users WHERE event_id = ${id}`);
  }

export async function createUser(db: DatabaseConnection, user: User) {
 await db.query(sql` INSERT INTO users (name, email, dob, source, event_id ) VALUES (${user.dataForm.name}, ${user.dataForm.email}, ${user.dataForm.dob}, ${user.dataForm.source}, ${user.eventId})`);
}