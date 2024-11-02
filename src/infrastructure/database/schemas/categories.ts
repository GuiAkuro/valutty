import { relations } from "drizzle-orm";
import { pgTable, varchar, uuid } from "drizzle-orm/pg-core";
import { transactions } from "./transactions";
import { accounts } from "./accounts";

export const categories = pgTable("categories", {
  id: uuid().primaryKey(),
  name: varchar({ length: 255 }).notNull().unique(),
  account: uuid("account_id").references(() => accounts.id),
});

export const categoriesRelations = relations(categories, ({ many, one }) => ({
  account: one(accounts, {
    references: [accounts.id],
    fields: [categories.account],
  }),
  transactions: many(transactions),
}));
