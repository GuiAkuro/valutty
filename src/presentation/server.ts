import { env } from "@/env";
import Fastify from "fastify";

const app = Fastify({
  logger: true,
});

app.get("health-check", (_, reply) => {
  reply.send({
    server: "is ok",
  });
});

app.listen({
  port: env.PORT,
});
