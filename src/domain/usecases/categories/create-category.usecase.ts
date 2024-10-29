export interface CreateCategoryRequestDTO {
  name: string;
}

export interface CreateCategoryResponseDTO {
  id: string;
  name: string;
}

export interface CreateCategoryUseCase {
  execute: (
    dto: CreateCategoryRequestDTO
  ) => Promise<CreateCategoryResponseDTO>;
}
