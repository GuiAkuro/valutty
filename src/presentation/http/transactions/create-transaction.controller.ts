import { jwtAuthentication } from "@/presentation/middlewares/auth";
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";

export const createTransactionRoute: FastifyPluginAsyncZod = async (app) => {
  app.post(
    "/transactions",
    {
      onRequest: jwtAuthentication,
      schema: {
        tags: ["Transactions"],
        body: z.object({
          value: z.number().min(0),
          description: z.string().nullable(),
          date: z.date(),
          account: z.string().uuid(),
          category: z.string().uuid(),
        }),
      },
    },
    async (request) => {
      const { description } = request.body;
      return { hello: description };
    }
  );
};
