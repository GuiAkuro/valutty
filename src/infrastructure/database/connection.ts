import { env } from "@/env";
import { drizzle } from "drizzle-orm/node-postgres";

import * as usersSchema from "./schemas/users";
import * as accountsSchema from "./schemas/accounts";
import * as transactionsSchema from "./schemas/transactions";
import * as categoriesSchema from "./schemas/categories";

export const db = drizzle(env.DATABASE_URL, {
  schema: {
    ...usersSchema,
    ...accountsSchema,
    ...transactionsSchema,
    ...categoriesSchema,
  },
});

export type DataBaseConnection = typeof db;
