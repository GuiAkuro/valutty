import { CreateAccount } from "@/application/usecases/accounts/create-account";
import { db } from "@/infrastructure/database/connection";
import { PostgresAccountsRepository } from "@/infrastructure/repositories/postgres/accounts.postgres";

export function makeCreateAccount() {
  const repository = new PostgresAccountsRepository(db);
  return new CreateAccount(repository);
}
