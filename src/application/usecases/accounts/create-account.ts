import { Account } from "@/domain/models/account";
import {
  CreateAccountRequestDTO,
  CreateAccountUseCase,
} from "@/domain/usecases/accounts/create-account.usecase";
import { AccountsRepository } from "@/infrastructure/repositories/accounts.repository";

export class CreateAccount implements CreateAccountUseCase {
  constructor(private accountsRepository: AccountsRepository) {}

  public async execute(dto: CreateAccountRequestDTO): Promise<void> {
    const newAccount = new Account({
      name: dto.name,
      amount: dto.amount,
      owner: dto.owner,
    });

    await this.accountsRepository.create(newAccount);
  }
}
