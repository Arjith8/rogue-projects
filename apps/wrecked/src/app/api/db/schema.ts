import { relations, sql } from "drizzle-orm";
import { int, sqliteTable, text, blob, check } from "drizzle-orm/sqlite-core";

export const loggingBase = sqliteTable("logging_base",
    {
        id: int().primaryKey({autoIncrement: true}),
        datetime: blob({ mode: 'bigint' }),
        level: int().notNull(),
        module: text(),
        message: text().notNull(),
    },
    (table) => ({
        checkConstraint: check('level_check', sql`${table.level}>0 & ${table.level}<3`),
    })
);

export const loggingBaseRelation = relations(loggingBase, ({ one }) => ({
	extras: one(extras),
}));

export const extras = sqliteTable("extras",
    {
        id: int().primaryKey({ autoIncrement: true }),
        baseId: int('logging_base').references(()=> loggingBase.id)
    }
)

                                  

