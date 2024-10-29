import { User } from "@/domain/models/user";

export abstract class UsersRepository {
  abstract create(): Promise<User>;
  abstract getAll(): Promise<Array<User>>;
  abstract getOneByEmail(email: string): Promise<User>;
  abstract getOneById(id: string): Promise<User>;
  abstract delete(id: string): Promise<User>;
  abstract update(id: string): Promise<User>;
}
