import { makeSignIn } from "@/presentation/factories/signin.factory";
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";

export const signInRoute: FastifyPluginAsyncZod = async (app) => {
  app.post(
    "/auth/sign-in",
    {
      schema: {
        tags: ["Auth"],
        body: z.object({
          email: z.string().email(),
          password: z.string(),
        }),
      },
    },
    async (request) => {
      const { email, password } = request.body;

      const signInUserCase = makeSignIn();

      const token = await signInUserCase.execute({
        email,
        password,
      });

      return { accessToken: token.accessToken };
    }
  );
};
