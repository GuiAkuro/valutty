import { Transaction } from "@/domain/models/transaction";
import {
  CreateTransactionRequestDTO,
  CreateTransactionUseCase,
} from "@/domain/usecases/transactions/create-transaction.usecase";
import { TransactionsRepository } from "@/infrastructure/repositories/transactions.repository";

export class CreateTransaction implements CreateTransactionUseCase {
  constructor(private transactionsRepository: TransactionsRepository) {}

  public async execute(dto: CreateTransactionRequestDTO): Promise<void> {
    const newTransaction = new Transaction({
      value: dto.value,
      description: dto.description,
      date: dto.date,
      type: dto.type,
      account: dto.account,
      category: dto.category,
    });

    await this.transactionsRepository.create(newTransaction);
  }
}
