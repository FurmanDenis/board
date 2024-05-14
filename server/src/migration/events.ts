import { DatabaseConnection } from '@databases/sqlite';
import { sql } from '../database';

export async function up(db: DatabaseConnection) {
    await db.query(sql`
        CREATE TABLE IF NOT EXISTS events (
            id TEXT PRIMARY KEY,
            title TEXT NOT NULL,
            description TEXT NOT NULL,
            date_start TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `);

    await db.query(sql`
        INSERT INTO events (id, title, description, date_start)
        SELECT '1', 'Event 1', 'Description of Event 1', datetime('now', '+1 day')
        WHERE NOT EXISTS (SELECT 1 FROM events WHERE id = '1')
        UNION ALL SELECT '2', 'Event 2', 'Description of Event 2', datetime('now', '+2 day')
        WHERE NOT EXISTS (SELECT 1 FROM events WHERE id = '2')
        UNION ALL SELECT '3', 'Event 3', 'Description of Event 3', datetime('now', '+3 day')
        WHERE NOT EXISTS (SELECT 1 FROM events WHERE id = '3')
        UNION ALL SELECT '4', 'Event 4', 'Description of Event 4', datetime('now', '+4 day')
        WHERE NOT EXISTS (SELECT 1 FROM events WHERE id = '4')
        UNION ALL SELECT '5', 'Event 5', 'Description of Event 5', datetime('now', '+5 day')
        WHERE NOT EXISTS (SELECT 1 FROM events WHERE id = '5')
        UNION ALL SELECT '6', 'Event 6', 'Description of Event 6', datetime('now', '+6 day')
        WHERE NOT EXISTS (SELECT 1 FROM events WHERE id = '6')
        UNION ALL SELECT '7', 'Event 7', 'Description of Event 7', datetime('now', '+7 day')
        WHERE NOT EXISTS (SELECT 1 FROM events WHERE id = '7')
        UNION ALL SELECT '8', 'Event 8', 'Description of Event 8', datetime('now', '+8 day')
        WHERE NOT EXISTS (SELECT 1 FROM events WHERE id = '8')
        UNION ALL SELECT '9', 'Event 9', 'Description of Event 9', datetime('now', '+9 day')
        WHERE NOT EXISTS (SELECT 1 FROM events WHERE id = '9')
        UNION ALL SELECT '10', 'Event 10', 'Description of Event 10', datetime('now', '+10 day')
        WHERE NOT EXISTS (SELECT 1 FROM events WHERE id = '10')
        UNION ALL SELECT '11', 'Event 11', 'Description of Event 11', datetime('now', '+11 day')
        WHERE NOT EXISTS (SELECT 1 FROM events WHERE id = '11')
        UNION ALL SELECT '12', 'Event 12', 'Description of Event 12', datetime('now', '+12 day')
        WHERE NOT EXISTS (SELECT 1 FROM events WHERE id = '12')
        UNION ALL SELECT '13', 'Event 13', 'Description of Event 13', datetime('now', '+13 day')
        WHERE NOT EXISTS (SELECT 1 FROM events WHERE id = '13')
        UNION ALL SELECT '14', 'Event 14', 'Description of Event 14', datetime('now', '+14 day')
        WHERE NOT EXISTS (SELECT 1 FROM events WHERE id = '14')
        UNION ALL SELECT '15', 'Event 15', 'Description of Event 15', datetime('now', '+15 day')
        WHERE NOT EXISTS (SELECT 1 FROM events WHERE id = '15')
        UNION ALL SELECT '16', 'Event 16', 'Description of Event 16', datetime('now', '+16 day')
        WHERE NOT EXISTS (SELECT 1 FROM events WHERE id = '16')
        UNION ALL SELECT '17', 'Event 17', 'Description of Event 17', datetime('now', '+17 day')
        WHERE NOT EXISTS (SELECT 1 FROM events WHERE id = '17')
        UNION ALL SELECT '18', 'Event 18', 'Description of Event 18', datetime('now', '+18 day')
        WHERE NOT EXISTS (SELECT 1 FROM events WHERE id = '18')
        UNION ALL SELECT '19', 'Event 19', 'Description of Event 19', datetime('now', '+19 day')
        WHERE NOT EXISTS (SELECT 1 FROM events WHERE id = '19')
        UNION ALL SELECT '20', 'Event 20', 'Description of Event 20', datetime('now', '+20 day')
        WHERE NOT EXISTS (SELECT 1 FROM events WHERE id = '20');
    `);
}