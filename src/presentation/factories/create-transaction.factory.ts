import { CreateTransaction } from "@/application/usecases/transactions/create-transaction";
import { db } from "@/infrastructure/database/connection";
import { TransactionsRepository } from "@/infrastructure/repositories/postgres/transactions.postgres";

export function makeCreateTransaction() {
  const repository = new TransactionsRepository(db);
  return new CreateTransaction(repository);
}
