export interface GetCategoriesResponseDTO {
  id: string;
  name: string;
}

export interface GetCategoriesUseCase {
  execute: () => Promise<Array<GetCategoriesResponseDTO>>;
}
