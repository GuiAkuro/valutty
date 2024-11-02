import { HashService } from "@/application/services/hash.service";
import { JwtService } from "@/application/services/jwt.service";
import { SignIn } from "@/application/usecases/auth/sign-in";
import { db } from "@/infrastrucutre/database/connection";
import { PostgresUsersRepository } from "@/infrastrucutre/repositories/postgres/users.postgres";

export function makeSignIn() {
  const repository = new PostgresUsersRepository(db);
  const hashService = new HashService();
  const jwtService = new JwtService();
  return new SignIn(hashService, jwtService, repository);
}
