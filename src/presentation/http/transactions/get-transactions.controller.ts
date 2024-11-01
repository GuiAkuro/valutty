import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";

export const getAllTransactionsRoute: FastifyPluginAsyncZod = async (app) => {
  app.get(
    "/transactions",
    {
      schema: {
        tags: ["Transactions"],
        response: {
          200: z.object({
            transactions: z.array(
              z.object({
                id: z.string().uuid(),
              })
            ),
          }),
        },
      },
    },
    async () => {
      return { transactions: [] };
    }
  );
};
