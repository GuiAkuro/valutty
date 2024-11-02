import { Account } from "@/domain/models/account";
import { AccountsRepository } from "../accounts.repository";

export class PostgresAccountsRepository implements AccountsRepository {
  public create(): Promise<Account> {
    return new Promise((resolve) => {
      resolve(
        new Account({
          ammount: 1000,
          name: "Nubank",
        })
      );
    });
  }

  public getAll(): Promise<Array<Account>> {
    return new Promise((resolve) => {
      resolve([
        new Account({
          ammount: 1000,
          name: "Nubank",
        }),
      ]);
    });
  }

  public getOneById(id: string): Promise<Account> {
    return new Promise((resolve) => {
      resolve(
        new Account({
          ammount: 1000,
          name: "Nubank",
        })
      );
    });
  }

  public delete(id: string): Promise<Account> {
    return new Promise((resolve) => {
      resolve(
        new Account({
          ammount: 1000,
          name: "Nubank",
        })
      );
    });
  }

  public update(id: string): Promise<Account> {
    return new Promise((resolve) => {
      resolve(
        new Account({
          ammount: 1000,
          name: "Nubank",
        })
      );
    });
  }
}
