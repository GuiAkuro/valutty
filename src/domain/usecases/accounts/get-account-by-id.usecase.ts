export interface GetAccountByIdResponseDTO {
  id: string;
  name: string;
  ammount: number;
}

export interface GetAccountByIdUseCase {
  execute: (id: string) => Promise<GetAccountByIdResponseDTO>;
}
