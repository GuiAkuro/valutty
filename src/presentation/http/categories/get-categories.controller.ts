import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";

export const getAllCategoriesRoute: FastifyPluginAsyncZod = async (app) => {
  app.get(
    "/categories",
    {
      schema: {
        tags: ["Categories"],
        response: {
          200: z.object({
            categories: z.array(
              z.object({
                id: z.string().uuid(),
              })
            ),
          }),
        },
      },
    },
    async () => {
      return { categories: [] };
    }
  );
};
