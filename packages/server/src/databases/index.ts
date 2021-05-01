import { PrismaClient } from "@prisma/client";

// Export as Singleton
export const customerDBClient = new PrismaClient({
  log: ["info", `warn`, `error`],
});
