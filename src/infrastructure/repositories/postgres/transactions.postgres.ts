import { Transaction } from "@/domain/models/transaction";
import { DataBaseConnection } from "@/infrastructure/database/connection";
import { transactions } from "@/infrastructure/database/schemas/transactions";

export class TransactionsRepository implements TransactionsRepository {
  constructor(private db: DataBaseConnection) {}

  public async create(transaction: Transaction): Promise<void> {
    console.log("transaction >>>> ", transaction);

    await this.db.insert(transactions).values({
      id: transaction.id!,
      value: transaction.value,
      description: transaction.description,
      date: transaction.date,
      type: transaction.type,
      account_id: transaction.account,
      category_id: transaction.category,
    });
  }

  public async getAll(): Promise<Array<Transaction>> {
    return new Promise((resolve) => {
      resolve([
        new Transaction({
          date: new Date(),
          value: 200,
          type: "CREDIT",
          account: "",
          category: "",
          description: "",
          id: "",
        }),
      ]);
    });
  }

  public getOneById(id: string): Promise<Transaction> {
    return new Promise((resolve) => {
      resolve(
        new Transaction({
          date: new Date(),
          value: 200,
          type: "CREDIT",
          account: "",
          category: "",
          description: "",
          id: "",
        })
      );
    });
  }

  public delete(id: string): Promise<Transaction> {
    return new Promise((resolve) => {
      resolve(
        new Transaction({
          date: new Date(),
          value: 200,
          type: "CREDIT",
          account: "",
          category: "",
          description: "",
          id: "",
        })
      );
    });
  }

  public update(id: string): Promise<Transaction> {
    return new Promise((resolve) => {
      resolve(
        new Transaction({
          date: new Date(),
          value: 200,
          type: "CREDIT",
          account: "",
          category: "",
          description: "",
          id: "",
        })
      );
    });
  }
}
