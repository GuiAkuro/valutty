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
          name: z.string(),
        }),
      },
    },
    async (request) => {
      const { name } = request.body;
      return { hello: name };
    }
  );
};
