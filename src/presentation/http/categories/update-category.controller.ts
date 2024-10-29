import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";

export const updateCategoryRoute: FastifyPluginAsyncZod = async (app) => {
  app.put(
    "/categories/:categoryId",
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
