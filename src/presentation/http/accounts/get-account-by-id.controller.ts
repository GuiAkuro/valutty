import { jwtAuthentication } from "@/presentation/middlewares/auth";
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";

export const getAccountByIdRoute: FastifyPluginAsyncZod = async (app) => {
  app.get(
    "/accounts/:accountId",
    {
      onRequest: jwtAuthentication,
      schema: {
        tags: ["Accounts"],
        response: {
          200: z.object({
            account: z.object({
              id: z.string().uuid(),
            }),
          }),
        },
      },
    },
    async (request) => {
      return {
        account: {
          id: "account",
        },
      };
    }
  );
};
