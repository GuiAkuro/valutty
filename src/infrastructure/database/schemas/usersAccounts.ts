import { pgTable, uuid, primaryKey } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { users } from "./users";
import { accounts } from "./accounts";

export const usersAccounts = pgTable(
  "users_accounts",
  {
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id),
    accountId: uuid("account_id")
      .notNull()
      .references(() => accounts.id),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.userId, t.accountId] }),
  })
);

export const usersToGroupsRelations = relations(usersAccounts, ({ one }) => ({
  group: one(accounts, {
    fields: [usersAccounts.accountId],
    references: [accounts.id],
  }),
  user: one(users, {
    fields: [usersAccounts.userId],
    references: [users.id],
  }),
}));
