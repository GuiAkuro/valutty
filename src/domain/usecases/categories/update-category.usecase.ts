export interface CreateAccountRequestDTO {
  name: string;
}

export interface UpdateCategoryUseCase {
  execute: (id: string, dto: CreateAccountRequestDTO) => Promise<void>;
}
