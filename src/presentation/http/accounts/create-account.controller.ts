import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";

export const createAccountRoute: FastifyPluginAsyncZod = async (app) => {
  app.post(
    "/accounts",
    {
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
