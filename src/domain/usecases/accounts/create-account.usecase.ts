export interface CreateAccountRequestDTO {
  name: string;
  ammount: number;
}

export interface CreateAccountResponseDTO {
  id: string;
  email: string;
  forename: string;
  surname: string;
}

export interface CreateAccountUseCase {
  execute: (dto: CreateAccountRequestDTO) => Promise<CreateAccountResponseDTO>;
}
