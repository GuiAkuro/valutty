import { relations } from "drizzle-orm";
import { pgTable, varchar, uuid } from "drizzle-orm/pg-core";
import { usersAccounts } from "./usersAccounts";

export const users = pgTable("users", {
  id: uuid().primaryKey(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
  forename: varchar({ length: 255 }).notNull(),
  surname: varchar({ length: 255 }).notNull(),
});

export const usersRelations = relations(users, ({ many }) => ({
  invitee: many(usersAccounts),
}));
