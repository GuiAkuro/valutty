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
import { createAccountRoute } from "./http/accounts/create-account.controller";
import { deleteAccountRoute } from "./http/accounts/delete-account.controller";
import { getAllAccountsRoute } from "./http/accounts/get-accounts.controller";
import { getAccountByIdRoute } from "./http/accounts/get-account-by-id.controller";
import { updateAccountRoute } from "./http/accounts/update-account.controller";
import { requestPasswordResetRoute } from "./http/auth/request-password-reset.controller";
import { resetPasswordRoute } from "./http/auth/reset-password.controller";
import { signInRoute } from "./http/auth/sign-in.controller";
import { createCategoryRoute } from "./http/categories/create-category.controller";
import { getCategoryByIdRoute } from "./http/categories/get-category-by-id.controller";
import { getAllCategoriesRoute } from "./http/categories/get-categories.controller";
import { deleteCategoryRoute } from "./http/categories/delete-category.controller";
import { updateCategoryRoute } from "./http/categories/update-category.controller";
import { createTransactionRoute } from "./http/transactions/create-transaction.controller";
import { getTransactionByIdRoute } from "./http/transactions/get-transaction-by-id.usecase-by-id.controller";
import { getAllTransactionsRoute } from "./http/transactions/get-transactions.controller";
import { updateTransactionsRoute } from "./http/transactions/update.transaction.controller";
import { deleteTransactionRoute } from "./http/transactions/delete-transaction.controller";

const app = Fastify({
  logger: true,
}).withTypeProvider<ZodTypeProvider>();

app.register(cors, {
  origin: env.CORS_ORIGIN,
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

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
app.register(deleteAccountRoute);
app.register(getAllAccountsRoute);
app.register(getAccountByIdRoute);
app.register(updateAccountRoute);

app.register(requestPasswordResetRoute);
app.register(resetPasswordRoute);
app.register(signInRoute);
app.register(signUpRoute);

app.register(createCategoryRoute);
app.register(getAllCategoriesRoute);
app.register(getCategoryByIdRoute);
app.register(deleteCategoryRoute);
app.register(updateCategoryRoute);

app.register(createTransactionRoute);
app.register(getAllTransactionsRoute);
app.register(getTransactionByIdRoute);
app.register(updateTransactionsRoute);
app.register(deleteTransactionRoute);

app.listen({ port: env.PORT }).then(() => {
  console.log("HTTP server running!");
});
