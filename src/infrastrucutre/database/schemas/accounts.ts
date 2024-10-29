import { relations } from "drizzle-orm";
import { pgTable, varchar, doublePrecision, uuid } from "drizzle-orm/pg-core";
import { usersAccounts } from "./usersAccounts";
import { transactions } from "./transactions";

export const accounts = pgTable("accounts", {
  id: uuid().primaryKey(),
  name: varchar({ length: 255 }).notNull().unique(),
  ammount: doublePrecision().notNull().default(0),
});

export const usersRelations = relations(accounts, ({ many }) => ({
  users: many(usersAccounts),
  transactions: many(transactions),
}));
