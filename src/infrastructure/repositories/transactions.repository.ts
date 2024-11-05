import { Transaction } from "@/domain/models/transaction";

export abstract class TransactionsRepository {
  abstract create(transaction: Transaction): Promise<void>;
  abstract getAll(): Promise<Array<Transaction>>;
  abstract getOneById(id: string): Promise<Transaction>;
  abstract delete(id: string): Promise<Transaction>;
  abstract update(id: string): Promise<Transaction>;
}
