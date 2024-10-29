export interface CreateAccountResponseDTO {
  id: string;
  email: string;
  forename: string;
  surname: string;
}

export interface GetAllTransactionsUseCase {
  execute: () => Promise<CreateAccountResponseDTO>;
}
