import { PrismaService } from './prisma.service';

type TestDelegate = { findMany: (args: any) => any };
export type PrismaDelegateNames = keyof {
  [P in keyof PrismaService as PrismaService[P] extends TestDelegate
    ? P
    : never]: PrismaService[P];
};
