import { HttpError } from "@/application/errors/http-error";
import { FastifyError, FastifyReply, FastifyRequest } from "fastify";
import {
  hasZodFastifySchemaValidationErrors,
  isResponseSerializationError,
} from "fastify-type-provider-zod";
import z from "zod";

export const validationErrorSchema = z.object({
  details: z.object({
    issues: z.array(
      z.object({
        instancePath: z.string(),
        keyword: z.string(),
        message: z.string(),
        params: z.object({
          issue: z.object({
            code: z.string(),
            expected: z.string(),
            message: z.string(),
            path: z.array(z.string()),
            received: z.string(),
          }),
        }),
        schemaPath: z.string(),
      })
    ),
    method: z.string(),
    url: z.string(),
  }),
  error: z.string(),
  message: z.string(),
  statusCode: z.number(),
});

export function errorHandler(
  err: FastifyError,
  req: FastifyRequest,
  reply: FastifyReply
) {
  if (hasZodFastifySchemaValidationErrors(err)) {
    return reply.code(400).send({
      error: "Response Validation Error",
      message: "Request doesn't match the schema",
      statusCode: 400,
      details: {
        issues: err.validation,
        method: req.method,
        url: req.url,
      },
    });
  }

  if (isResponseSerializationError(err)) {
    return reply.code(500).send({
      error: "Internal Server Error",
      message: "Response doesn't match the schema",
      statusCode: 500,
      details: {
        issues: err.cause.issues,
        method: err.method,
        url: err.url,
      },
    });
  }

  if (err instanceof HttpError) {
    return reply.code(err.statusCode).send({
      message: err.message,
    });
  }

  return reply.code(500).send({
    message: "unknown internal server error.",
  });
}
