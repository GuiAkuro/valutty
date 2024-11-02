import { User } from "@/domain/models/user";
import { UsersRepository } from "../users.repository";
import { DataBaseConnection } from "@/infrastructure/database/connection";
import { users } from "@/infrastructure/database/schemas/users";
import { eq } from "drizzle-orm";
import { UsersAdapter } from "@/infrastructure/adapters/users.adapter";

export class PostgresUsersRepository implements UsersRepository {
  constructor(private db: DataBaseConnection) {}

  public async create(user: User): Promise<void> {
    await this.db.insert(users).values({
      id: user.id!,
      email: user.email,
      password: user.password,
      forename: user.forename,
      surname: user.surname,
    });
  }

  public async getAll(): Promise<Array<User> | null> {
    const users = await this.db.query.users.findMany();

    return UsersAdapter.many(users);
  }

  public async findByEmail(email: string): Promise<User | null> {
    const user = await this.db.query.users.findFirst({
      where: eq(users.email, email),
    });

    return UsersAdapter.one(user);
  }

  public async findById(id: string): Promise<User | null> {
    const user = await this.db.query.users.findFirst({
      where: eq(users.id, id),
    });

    return UsersAdapter.one(user);
  }

  public async delete(user: User): Promise<void> {
    if (!user.id) {
      throw new Error("failed to delete user, id not provided.");
    }

    await this.db.delete(users).where(eq(users.id, user.id));
  }

  public async update(user: User): Promise<void> {
    if (!user.id) {
      throw new Error("failed to update user, id not provided.");
    }

    await this.db
      .update(users)
      .set({
        id: user.id,
        forename: user.forename,
        surname: user.surname,
      })
      .where(eq(users.id, user.id));
  }
}
