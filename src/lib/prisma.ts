import { PrismaClient } from "@prisma/client";

declare global {
  // allow globalThis.prisma to exist
  var prisma: PrismaClient | undefined;
}

let prisma: PrismaClient;

if (!globalThis.prisma) {
  globalThis.prisma = new PrismaClient();
}

prisma = globalThis.prisma;

export const getPrisma = () => prisma;
