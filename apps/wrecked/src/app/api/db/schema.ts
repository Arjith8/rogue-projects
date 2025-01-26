import { relations, sql } from "drizzle-orm";
import { int, sqliteTable, text, blob, check } from "drizzle-orm/sqlite-core";

// what about celery requests 
export const loggingBase = sqliteTable("logging_base",
    {
        id: int().primaryKey({autoIncrement: true}),
        requestSendAt: blob({ mode: 'bigint' }).notNull(),
        level: text({ enum: ["INFO", "WARNING", "ERROR"]}).notNull(),
        message: text().notNull(),
        fileName: text().notNull(),
    },
);

export const loggingBaseRelation = relations(loggingBase, ({ one }) => ({
	extras: one(extras),
}));

export const extras = sqliteTable("extras",
    {
        id: int().primaryKey({ autoIncrement: true }),
        baseId: int('logging_base').references(()=> loggingBase.id),
        executionTime: int(),
        requestStatus: text(),
        serializerError: text({mode: "json"}),
        errorStack: blob(),
        requestBody: text({ mode: "json"})
    }
)

                                  

