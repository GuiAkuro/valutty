export interface GetAllAccountResponseDTO {
  id: string;
  name: string;
  ammount: number;
}

export interface GetAllAccountUseCase {
  execute: () => Promise<GetAllAccountResponseDTO>;
}
