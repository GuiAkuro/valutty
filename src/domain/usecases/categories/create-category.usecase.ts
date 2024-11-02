export interface CreateCategoryRequestDTO {
  name: string;
  account: string;
}

export interface CreateCategoryUseCase {
  execute: (dto: CreateCategoryRequestDTO) => Promise<void>;
}
