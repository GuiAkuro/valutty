import { User } from "@/domain/models/user";

export abstract class UsersRepository {
  abstract create(user: User): Promise<void>;
  abstract getAll(): Promise<Array<User> | null>;
  abstract findByEmail(email: string): Promise<User | null>;
  abstract findById(id: string): Promise<User | null>;
  abstract delete(user: User): Promise<void>;
  abstract update(user: User): Promise<void>;
}
