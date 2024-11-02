import { relations } from "drizzle-orm";
import {
  pgTable,
  doublePrecision,
  date,
  pgEnum,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";
import { accounts } from "./accounts";
import { categories } from "./categories";

export const typeOfTransactionEnum = pgEnum("typeOfTransactionEnum", [
  "credit",
  "debt",
]);

export const transactions = pgTable("transactions", {
  id: uuid().primaryKey(),
  value: doublePrecision().notNull().default(0),
  description: varchar(),
  date: date().defaultNow().notNull(),
  type: typeOfTransactionEnum(),
  account_id: uuid().references(() => accounts.id),
  category_id: uuid().references(() => categories.id),
});

export const transactionsRelations = relations(transactions, ({ one }) => ({
  account: one(accounts, {
    fields: [transactions.account_id],
    references: [accounts.id],
  }),
  category: one(categories, {
    fields: [transactions.category_id],
    references: [categories.id],
  }),
}));
