export interface DeleteTransactionUseCase {
  execute: (id: string) => Promise<void>;
}
