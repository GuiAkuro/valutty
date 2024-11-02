import { jwtAuthentication } from "@/presentation/middlewares/auth";
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";

export const getAllTransactionsRoute: FastifyPluginAsyncZod = async (app) => {
  app.get(
    "/transactions",
    {
      onRequest: jwtAuthentication,
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
    async (request) => {
      console.log(request.user);

      return { transactions: [] };
    }
  );
};
