import { hash, compare } from "bcrypt";

export class HashService {
  public async hash(value: string) {
    return await hash(value, 10);
  }

  public async compare(value: string, hashedValue: string) {
    return await compare(value, hashedValue);
  }
}
