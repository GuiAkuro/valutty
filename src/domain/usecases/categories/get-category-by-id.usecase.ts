export interface GetCategoryResponseDTO {
  id: string;
  name: string;
}

export interface GetCategoryUseCase {
  execute: (id: string) => Promise<GetCategoryResponseDTO>;
}
