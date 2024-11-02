import { jwtAuthentication } from "@/presentation/middlewares/auth";
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";

export const updateAccountRoute: FastifyPluginAsyncZod = async (app) => {
  app.put(
    "/accounts/:accountId",
    {
      onRequest: jwtAuthentication,
      schema: {
        tags: ["Accounts"],
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
