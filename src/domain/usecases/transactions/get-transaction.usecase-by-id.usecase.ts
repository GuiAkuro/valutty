export interface CreateAccountRequestDTO {
  email: string;
  password: string;
  forename: string;
  surname: string;
}

export interface CreateAccountResponseDTO {
  id: string;
  email: string;
  forename: string;
  surname: string;
}

export interface GetTransactionByIdUseCase {
  execute: (dto: CreateAccountRequestDTO) => Promise<CreateAccountResponseDTO>;
}
