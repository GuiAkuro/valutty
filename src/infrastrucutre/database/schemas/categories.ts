import { pgTable, varchar, uuid } from "drizzle-orm/pg-core";

export const categories = pgTable("categories", {
  id: uuid().primaryKey(),
  name: varchar({ length: 255 }).notNull().unique(),
});
