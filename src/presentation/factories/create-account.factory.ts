import { CreateAccount } from "@/application/usecases/accounts/create-account";
import { db } from "@/infrastrucutre/database/connection";
import { PostgresAccountsRepository } from "@/infrastrucutre/repositories/postgres/accounts.postgres";

export function makeCreateAccount() {
  const repository = new PostgresAccountsRepository(db);
  return new CreateAccount(repository);
}
