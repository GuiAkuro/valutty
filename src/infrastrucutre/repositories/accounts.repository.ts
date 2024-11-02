import { Account } from "@/domain/models/account";

export abstract class AccountsRepository {
  abstract create(account: Account): Promise<void>;
  abstract getAll(): Promise<Array<Account>>;
  abstract getOneById(id: string): Promise<Account>;
  abstract delete(id: string): Promise<Account>;
  abstract update(id: string): Promise<Account>;
}
