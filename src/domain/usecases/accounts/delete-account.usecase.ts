export interface DeleteAccountUseCase {
  execute: (id: string) => Promise<void>;
}
