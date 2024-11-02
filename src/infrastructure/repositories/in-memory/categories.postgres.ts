import { CategoriesRepository } from "../categories.repository";
import { Category } from "@/domain/models/category";

export class PostgresCategoriesRepository implements CategoriesRepository {
  public create(): Promise<Category> {
    return new Promise((resolve) => {
      resolve(
        new Category({
          name: "Nubank",
        })
      );
    });
  }

  public getAll(): Promise<Array<Category>> {
    return new Promise((resolve) => {
      resolve([
        new Category({
          name: "Nubank",
        }),
      ]);
    });
  }

  public getOneById(id: string): Promise<Category> {
    return new Promise((resolve) => {
      resolve(
        new Category({
          name: "Nubank",
        })
      );
    });
  }

  public delete(id: string): Promise<Category> {
    return new Promise((resolve) => {
      resolve(
        new Category({
          name: "Nubank",
        })
      );
    });
  }

  public update(id: string): Promise<Category> {
    return new Promise((resolve) => {
      resolve(
        new Category({
          name: "Nubank",
        })
      );
    });
  }
}
