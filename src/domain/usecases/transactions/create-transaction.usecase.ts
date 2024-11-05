export interface CreateTransactionRequestDTO {
  value: number;
  description: string;
  type: "CREDIT" | "DEBT";
  date: Date;
  account: string;
  category: string;
}

export interface CreateTransactionUseCase {
  execute: (dto: CreateTransactionRequestDTO) => Promise<void>;
}
