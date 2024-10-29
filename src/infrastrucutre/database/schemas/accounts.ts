import { pgTable, varchar, doublePrecision, uuid } from "drizzle-orm/pg-core";

export const accounts = pgTable("accounts", {
  id: uuid().primaryKey(),
  name: varchar({ length: 255 }).notNull().unique(),
  ammount: doublePrecision().notNull().default(0),
});
