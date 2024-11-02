import { HashService } from "@/application/services/hash.service";
import { SignUp } from "@/application/usecases/auth/sign-up";
import { db } from "@/infrastructure/database/connection";
import { PostgresUsersRepository } from "@/infrastructure/repositories/postgres/users.postgres";

export function makeSignUp() {
  const repository = new PostgresUsersRepository(db);
  const hashService = new HashService();
  return new SignUp(repository, hashService);
}
