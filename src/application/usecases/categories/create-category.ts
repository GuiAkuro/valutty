import { Category } from "@/domain/models/category";
import {
  CreateCategoryRequestDTO,
  CreateCategoryUseCase,
} from "@/domain/usecases/categories/create-category.usecase";
import { CategoriesRepository } from "@/infrastructure/repositories/categories.repository";

export class CreateCategory implements CreateCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  public async execute(dto: CreateCategoryRequestDTO): Promise<void> {
    const newCategory = new Category({
      name: dto.name,
      account: dto.account,
    });

    await this.categoriesRepository.create(newCategory);
  }
}
