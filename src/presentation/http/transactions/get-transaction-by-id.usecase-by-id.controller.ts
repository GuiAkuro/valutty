import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";

export const getTransactionByIdRoute: FastifyPluginAsyncZod = async (app) => {
  app.get(
    "/transactions/:transactionId",
    {
      schema: {
        tags: ["Transactions"],
        response: {
          200: z.object({
            transaction: z.object({
              id: z.string().uuid(),
            }),
          }),
        },
      },
    },
    async () => {
      return {
        transaction: {
          id: "id",
        },
      };
    }
  );
};
