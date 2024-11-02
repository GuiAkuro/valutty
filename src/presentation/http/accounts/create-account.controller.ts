import { makeCreateAccount } from "@/presentation/factories/create-account.factory";
import { jwtAuthentication } from "@/presentation/middlewares/auth";
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";

export const createAccountRoute: FastifyPluginAsyncZod = async (app) => {
  app.post(
    "/accounts",
    {
      onRequest: jwtAuthentication,
      schema: {
        tags: ["Accounts"],
        body: z.object({
          name: z.string(),
          amount: z.number(),
        }),
      },
    },
    async (request, reply) => {
      const { name, amount } = request.body;
      const { id: owner } = request.user;

      const createAccountUseCase = makeCreateAccount();

      await createAccountUseCase.execute({
        name,
        amount,
        owner,
      });

      return reply.status(201).send();
    }
  );
};
