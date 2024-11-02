import { JwtService } from "@/application/services/jwt.service";
import { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from "fastify";

declare module "fastify" {
  interface FastifyRequest {
    user: {
      id: string;
      email: string;
      forename: string;
      surname: string;
    };
  }
}

export function jwtAuthentication(
  request: FastifyRequest,
  reply: FastifyReply,
  done: HookHandlerDoneFunction
) {
  try {
    if (!request.headers.authorization) {
      return reply.code(409).send({
        message: "you are unauthorized",
      });
    }

    const [_, token] = request.headers.authorization.split(" ");

    if (!token) {
      return reply.code(409).send({
        message: "you are unauthorized",
      });
    }

    const jwtService = new JwtService();

    const isValidToken = jwtService.verify(token);

    if (!isValidToken) {
      return reply.code(409).send({
        message: "you are unauthorized",
      });
    }

    request.user = {
      id: isValidToken.id,
      email: isValidToken.email,
      forename: isValidToken.forename,
      surname: isValidToken.surname,
    };

    done();
  } catch {
    reply.code(409).send({
      message: "you are unauthorized",
    });
  }
}
