import { User } from "@/domain/models/user";
import { UsersRepository } from "../users.repository";
import { DataBaseConnection } from "@/infrastrucutre/database/connection";

export class PostgresUsersRepository implements UsersRepository {
  constructor(private db: DataBaseConnection) {}

  public async create(user: User): Promise<void> {
    console.log("created");
  }

  public async getAll(): Promise<Array<User>> {
    return [
      new User({
        email: "g.alves.oliveira@outlook.com",
        password: "123",
        forename: "Guilherme",
        surname: "Oliveira",
      }),
    ];
  }

  public async findByEmail(email: string): Promise<User> {
    return new User({
      email: "g.alves.oliveira@outlook.com",
      password: "123",
      forename: "Guilherme",
      surname: "Oliveira",
    });
  }

  public async findById(id: string): Promise<User> {
    return new User({
      email: "g.alves.oliveira@outlook.com",
      password: "123",
      forename: "Guilherme",
      surname: "Oliveira",
    });
  }

  public async delete(id: string): Promise<User> {
    return new User({
      email: "g.alves.oliveira@outlook.com",
      password: "123",
      forename: "Guilherme",
      surname: "Oliveira",
    });
  }

  public async update(id: string): Promise<User> {
    return new User({
      email: "g.alves.oliveira@outlook.com",
      password: "123",
      forename: "Guilherme",
      surname: "Oliveira",
    });
  }
}
