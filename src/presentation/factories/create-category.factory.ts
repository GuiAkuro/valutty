import { CreateCategory } from "@/application/usecases/categories/create-category";
import { db } from "@/infrastructure/database/connection";
import { PostgresCategoriesRepository } from "@/infrastructure/repositories/postgres/categories.postgres";

export function makeCreateCategory() {
  const repository = new PostgresCategoriesRepository(db);
  return new CreateCategory(repository);
}
