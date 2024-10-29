import {
  pgTable,
  doublePrecision,
  date,
  pgEnum,
  uuid,
} from "drizzle-orm/pg-core";

export const typeOfTransactionEnum = pgEnum("typeOfTransactionEnum", [
  "credit",
  "debt",
]);

export const transactions = pgTable("transactions", {
  id: uuid().primaryKey(),
  value: doublePrecision().notNull().default(0),
  date: date().defaultNow().notNull(),
  type: typeOfTransactionEnum(),
});
