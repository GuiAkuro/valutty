export interface CreateAccountRequestDTO {
  name: string;
  amount: number;
  owner: string;
}

export interface CreateAccountUseCase {
  execute: (dto: CreateAccountRequestDTO) => Promise<void>;
}
