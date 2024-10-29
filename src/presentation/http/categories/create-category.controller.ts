import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";

export const createCategoryRoute: FastifyPluginAsyncZod = async (app) => {
  app.post(
    "/categories",
    {
      schema: {
        tags: ["Categories"],
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
