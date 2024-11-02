import { makeCreateCategory } from "@/presentation/factories/create-category.factory";
import { jwtAuthentication } from "@/presentation/middlewares/auth";
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";

export const createCategoryRoute: FastifyPluginAsyncZod = async (app) => {
  app.post(
    "/categories",
    {
      onRequest: jwtAuthentication,
      schema: {
        tags: ["Categories"],
        body: z.object({
          name: z.string(),
          account: z.string().uuid(),
        }),
      },
    },
    async (request, reply) => {
      const { name, account } = request.body;

      const createCategoryUseCase = makeCreateCategory();

      await createCategoryUseCase.execute({
        name,
        account,
      });

      return reply.status(201).send();
    }
  );
};
