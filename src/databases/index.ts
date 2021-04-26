import { PrismaClient } from "@prisma/client";

// Export as Singleton
export const customerDBClient = new PrismaClient({
  log: ["query", "info", `warn`, `error`],
});
