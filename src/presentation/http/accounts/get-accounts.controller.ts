import { jwtAuthentication } from "@/presentation/middlewares/auth";
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";

export const getAllAccountsRoute: FastifyPluginAsyncZod = async (app) => {
  app.get(
    "/accounts",
    {
      onRequest: jwtAuthentication,
      schema: {
        tags: ["Accounts"],
        response: {
          200: z.object({
            accounts: z.array(
              z.object({
                id: z.string().uuid(),
              })
            ),
          }),
        },
      },
    },
    async () => {
      return { accounts: [] };
    }
  );
};
