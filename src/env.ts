import z from "zod";

const envSchema = z.object({
  PORT: z.string().transform(Number),
  DATABASE_URL: z.string().url(),
  CORS_ORIGIN: z.string(),
  JWT_SECRET: z.string(),
});

export const env = envSchema.parse(process.env);
