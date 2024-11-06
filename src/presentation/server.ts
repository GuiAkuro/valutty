import { env } from "@/env";
import Fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider,
} from "fastify-type-provider-zod";
import cors from "@fastify/cors";
import { signUpRoute } from "./http/auth/sign-up.controller";
import { signInRoute } from "./http/auth/sign-in.controller";
import { createAccountRoute } from "./http/accounts/create-account.controller";
import { createCategoryRoute } from "./http/categories/create-category.controller";
import { createTransactionRoute } from "./http/transactions/create-transaction.controller";
import { getAllTransactionsRoute } from "./http/transactions/get-transactions.controller";
import { errorHandler } from "./middlewares/error-handler";

const app = Fastify({
  logger: true,
}).withTypeProvider<ZodTypeProvider>();

app.register(cors, {
  origin: env.CORS_ORIGIN,
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.setErrorHandler(errorHandler);

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: "Valutty",
      description: "Valutty API Documentation",
      version: "1.0.0",
    },
    servers: [],
  },
  transform: jsonSchemaTransform,
});

app.register(fastifySwaggerUI, {
  routePrefix: "/documentation",
});

app.register(createAccountRoute);

app.register(signInRoute);
app.register(signUpRoute);

app.register(createCategoryRoute);

app.register(createTransactionRoute);
app.register(getAllTransactionsRoute);

app.listen({ port: env.PORT }).then(() => {
  console.log("HTTP server running!");
});
