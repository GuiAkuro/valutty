import { JwtService } from "@/application/services/jwt.service";
import { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from "fastify";

export function jwtAuthentication(
  request: FastifyRequest,
  reply: FastifyReply,
  done: HookHandlerDoneFunction
) {
  try {
    const [_, token] = request.headers.authorization?.split(" ");

    if (!token) {
      reply.code(409).send({
        message: "you are unauthorized",
      });
    }

    const jwtService = new JwtService();

    const isValidToken = jwtService.verify(token);

    if (!isValidToken) {
      reply.code(409).send({
        message: "you are unauthorized",
      });
    }

    done();
  } catch {
    reply.code(409).send({
      message: "you are unauthorized",
    });
  }
}
