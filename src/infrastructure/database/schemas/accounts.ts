import { relations } from "drizzle-orm";
import { pgTable, varchar, doublePrecision, uuid } from "drizzle-orm/pg-core";
import { transactions } from "./transactions";
import { users } from "./users";

export const accounts = pgTable("accounts", {
  id: uuid().primaryKey(),
  name: varchar({ length: 255 }).notNull().unique(),
  amount: doublePrecision().notNull().default(0),
  owner: uuid().references(() => users.id),
});

export const usersRelations = relations(accounts, ({ many, one }) => ({
  owner: one(users, {
    fields: [accounts.owner],
    references: [users.id],
  }),
  transactions: many(transactions),
}));
