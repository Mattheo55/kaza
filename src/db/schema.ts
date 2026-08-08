import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const taskTable = sqliteTable('tasks', {
    id: integer().primaryKey({autoIncrement: true}),
    name: text().notNull(),
    isComplete: integer({mode: "boolean"}).default(false).notNull()
})