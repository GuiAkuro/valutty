import { jwtAuthentication } from "@/presentation/middlewares/auth";
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";

export const updateCategoryRoute: FastifyPluginAsyncZod = async (app) => {
  app.put(
    "/categories/:categoryId",
    {
      onRequest: jwtAuthentication,
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
