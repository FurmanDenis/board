import * as Events from '../../src/events';
import { initializeDatabase } from "../../src/database";

export default defineEventHandler(async (event) => {
    const {databasePath} = useRuntimeConfig();
    const database = await initializeDatabase(databasePath);
    const {id} = event.context.params;
    return Events.getUsersById(database, id);
})