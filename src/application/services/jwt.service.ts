import { env } from "@/env";
import jwt from "jsonwebtoken";

export class JwtService {
  public sign(payload: Object) {
    return jwt.sign(payload, env.JWT_SECRET, {
      expiresIn: env.JWT_EXPIRATION_TIME,
    });
  }

  public verify(token: string) {
    try {
      const payload = jwt.verify(token, env.JWT_SECRET);

      console.log(payload);

      return true;
    } catch {
      return false;
    }
  }
}
