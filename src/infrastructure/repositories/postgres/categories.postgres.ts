import { DataBaseConnection } from "@/infrastructure/database/connection";
import { CategoriesRepository } from "../categories.repository";
import { Category } from "@/domain/models/category";
import { categories } from "@/infrastructure/database/schemas/categories";

export class PostgresCategoriesRepository implements CategoriesRepository {
  constructor(private db: DataBaseConnection) {}

  public async create(category: Category): Promise<void> {
    console.log("repository category -> ", category);

    await this.db.insert(categories).values({
      id: category.id!,
      name: category.name,
      account: category.account,
    });
  }

  public getAll(): Promise<Array<Category>> {
    return new Promise((resolve) => {
      resolve([
        new Category({
          name: "Nubank",
          account: "",
        }),
      ]);
    });
  }

  public getOneById(id: string): Promise<Category> {
    return new Promise((resolve) => {
      resolve(
        new Category({
          name: "Nubank",
          account: "",
        })
      );
    });
  }

  public delete(id: string): Promise<Category> {
    return new Promise((resolve) => {
      resolve(
        new Category({
          name: "Nubank",
          account: "",
        })
      );
    });
  }

  public update(id: string): Promise<Category> {
    return new Promise((resolve) => {
      resolve(
        new Category({
          name: "Nubank",
          account: "",
        })
      );
    });
  }
}
