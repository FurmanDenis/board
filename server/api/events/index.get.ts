import * as Events from '../../src/events';
import { initializeDatabase } from "../../src/database";

export default defineEventHandler(async (event) => {
    const { databasePath } = useRuntimeConfig();
    const database = await initializeDatabase(databasePath);
    return Events.getEvents(database);
})