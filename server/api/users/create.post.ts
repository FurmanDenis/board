import * as Events from '../../src/events';
import { initializeDatabase } from "../../src/database";

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)
        const { databasePath } = useRuntimeConfig();
        const database = await initializeDatabase(databasePath);
        return Events.createUser(database,body)
    } catch (e) {
        return createError({ statusCode: 400, statusMessage: e.message })
    }
})