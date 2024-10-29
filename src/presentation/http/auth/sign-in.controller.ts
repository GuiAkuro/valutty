import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";

export const signInRoute: FastifyPluginAsyncZod = async (app) => {
  app.post(
    "/auth/sign-in",
    {
      schema: {
        tags: ["Auth"],
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
