import { Account } from "@/domain/models/account";
import { AccountsRepository } from "../accounts.repository";
import { DataBaseConnection } from "@/infrastructure/database/connection";
import { accounts } from "@/infrastructure/database/schemas/accounts";

export class PostgresAccountsRepository implements AccountsRepository {
  constructor(private db: DataBaseConnection) {}

  public async create(account: Account): Promise<void> {
    console.log("repository account ", account);

    await this.db.insert(accounts).values({
      id: account.id!,
      name: account.name,
      amount: account.amount,
      owner: account.owner,
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
