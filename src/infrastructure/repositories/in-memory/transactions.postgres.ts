import { Transaction } from "@/domain/models/transaction";

export class TransactionsRepository {
  public create(): Promise<Transaction> {
    return new Promise((resolve) => {
      resolve(
        new Transaction({
          date: new Date(),
          value: 200,
          type: "CREDIT",
        })
      );
    });
  }

  public getAll(): Promise<Array<Transaction>> {
    return new Promise((resolve) => {
      resolve([
        new Transaction({
          date: new Date(),
          value: 200,
          type: "CREDIT",
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
        })
      );
    });
  }
}
