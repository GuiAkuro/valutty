export interface UpdateTransactionRequestDTO {
  value: string;
  type: "CREDIT" | "DEBT";
}

export interface UpdateTransactionUseCase {
  execute: (id: string, dto: UpdateTransactionRequestDTO) => Promise<void>;
}
