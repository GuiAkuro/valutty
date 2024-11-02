import { Category } from "@/domain/models/category";

export abstract class CategoriesRepository {
  abstract create(category: Category): Promise<void>;
  abstract getAll(): Promise<Array<Category>>;
  abstract getOneById(id: string): Promise<Category>;
  abstract delete(id: string): Promise<Category>;
  abstract update(id: string): Promise<Category>;
}
