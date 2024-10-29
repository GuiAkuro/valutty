import { User } from "@/domain/models/user";

export abstract class UsersRepository {
  abstract create(user: User): Promise<void>;
  abstract getAll(): Promise<Array<User>>;
  abstract findByEmail(email: string): Promise<User>;
  abstract findById(id: string): Promise<User>;
  abstract delete(id: string): Promise<User>;
  abstract update(id: string): Promise<User>;
}
