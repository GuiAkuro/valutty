import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";

export const updateTransactionsRoute: FastifyPluginAsyncZod = async (app) => {
  app.put(
    "/transactions/:transactionId",
    {
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
