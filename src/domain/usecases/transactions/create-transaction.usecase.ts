export interface CreateTransactionRequestDTO {
  value: number;
  type: "CREDIT" | "DEBT";
}

export interface CreateTransactionResponseDTO {
  id: string;
  value: string;
  date: Date;
  type: "CREDIT" | "DEBT";
}

export interface CreateTransactionUseCase {
  execute: (
    dto: CreateTransactionRequestDTO
  ) => Promise<CreateTransactionResponseDTO>;
}
