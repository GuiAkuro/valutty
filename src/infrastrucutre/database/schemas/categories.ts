import { relations } from "drizzle-orm";
import { pgTable, varchar, uuid } from "drizzle-orm/pg-core";
import { transactions } from "./transactions";

export const categories = pgTable("categories", {
  id: uuid().primaryKey(),
  name: varchar({ length: 255 }).notNull().unique(),
});

export const categoriesRelations = relations(categories, ({ many }) => ({
  transactions: many(transactions),
}));
