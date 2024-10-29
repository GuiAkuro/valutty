import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";

export const deleteCategoryRoute: FastifyPluginAsyncZod = async (app) => {
  app.delete(
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
