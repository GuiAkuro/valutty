import { User } from "@/domain/models/user";

export class UsersRepository {
  public create(): Promise<User> {
    return new Promise((resolve) => {
      resolve(
        new User({
          email: "g.alves.oliveira@outlook.com",
          password: "123",
          forename: "Guilherme",
          surname: "Oliveira",
        })
      );
    });
  }

  public getAll(): Promise<Array<User>> {
    return new Promise((resolve) => {
      resolve([
        new User({
          email: "g.alves.oliveira@outlook.com",
          password: "123",
          forename: "Guilherme",
          surname: "Oliveira",
        }),
      ]);
    });
  }

  public getOneByEmail(email: string): Promise<User> {
    return new Promise((resolve) => {
      resolve(
        new User({
          email: "g.alves.oliveira@outlook.com",
          password: "123",
          forename: "Guilherme",
          surname: "Oliveira",
        })
      );
    });
  }

  public getOneById(id: string): Promise<User> {
    return new Promise((resolve) => {
      resolve(
        new User({
          email: "g.alves.oliveira@outlook.com",
          password: "123",
          forename: "Guilherme",
          surname: "Oliveira",
        })
      );
    });
  }

  public delete(id: string): Promise<User> {
    return new Promise((resolve) => {
      resolve(
        new User({
          email: "g.alves.oliveira@outlook.com",
          password: "123",
          forename: "Guilherme",
          surname: "Oliveira",
        })
      );
    });
  }

  public update(id: string): Promise<User> {
    return new Promise((resolve) => {
      resolve(
        new User({
          email: "g.alves.oliveira@outlook.com",
          password: "123",
          forename: "Guilherme",
          surname: "Oliveira",
        })
      );
    });
  }
}
