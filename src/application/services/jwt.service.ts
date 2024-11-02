import { env } from "@/env";
import jwt from "jsonwebtoken";

interface JwtPayload {
  id: string;
  email: string;
  forename: string;
  surname: string;
}

export class JwtService {
  public sign(payload: Object) {
    return jwt.sign(payload, env.JWT_SECRET, {
      expiresIn: env.JWT_EXPIRATION_TIME,
    });
  }

  public verify(token: string) {
    try {
      return jwt.verify(token, env.JWT_SECRET) as JwtPayload;
    } catch {
      return null;
    }
  }
}
