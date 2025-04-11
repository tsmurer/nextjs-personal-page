import type { Config } from "drizzle-kit";
export default {
  dialect: 'sqlite',
  schema: "./src/lib/db/schema.ts",
  out: "./drizzle/migrations",
} satisfies Config;