import { jwtAuthentication } from "@/presentation/middlewares/auth";
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";

export const getCategoryByIdRoute: FastifyPluginAsyncZod = async (app) => {
  app.get(
    "/categories/:categoryId",
    {
      onRequest: jwtAuthentication,
      schema: {
        tags: ["Categories"],
        response: {
          200: z.object({
            category: z.object({
              id: z.string().uuid(),
            }),
          }),
        },
      },
    },
    async () => {
      return {
        category: {
          id: "",
        },
      };
    }
  );
};
