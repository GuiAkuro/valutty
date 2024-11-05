import { makeCreateTransaction } from "@/presentation/factories/create-transaction.factory";
import { jwtAuthentication } from "@/presentation/middlewares/auth";
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";

export const createTransactionRoute: FastifyPluginAsyncZod = async (app) => {
  app.post(
    "/transactions",
    {
      onRequest: jwtAuthentication,
      schema: {
        tags: ["Transactions"],
        body: z.object({
          value: z.number().min(0),
          description: z.string().nullable(),
          date: z.string(),
          type: z.enum(["credit", "debt"]),
          account: z.string().uuid(),
          category: z.string().uuid(),
        }),
      },
    },
    async (request, reply) => {
      const { value, description, date, type, account, category } =
        request.body;

      const createTransactionUseCase = makeCreateTransaction();

      await createTransactionUseCase.execute({
        value,
        description: description ? description : "",
        date: new Date(date),
        type,
        account,
        category,
      });

      return reply.status(201).send();
    }
  );
};
