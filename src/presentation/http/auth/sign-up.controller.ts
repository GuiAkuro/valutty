import { makeSignUp } from "@/presentation/factories/signup.factory";
import { validationErrorSchema } from "@/presentation/middlewares/error-handler";
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";

export const signUpRoute: FastifyPluginAsyncZod = async (app) => {
  app.post(
    "/auth/sign-up",
    {
      schema: {
        tags: ["Auth"],
        body: z.object({
          email: z.string().email(),
          password: z.string(),
          forename: z.string(),
          surname: z.string(),
        }),
        response: {
          201: z.null(),
          400: validationErrorSchema,
        },
      },
    },
    async (request, reply) => {
      const { email, password, forename, surname } = request.body;

      const signUpUseCase = makeSignUp();

      await signUpUseCase.execute({
        email,
        password,
        forename,
        surname,
      });

      return reply.code(201).send();
    }
  );
};
