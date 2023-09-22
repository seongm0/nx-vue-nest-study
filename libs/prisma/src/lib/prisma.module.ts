import { DynamicModule, Module } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from './prisma.service';
import { PrismaDelegateNames } from './type';

@Module({})
export class PrismaModule {
  static forRoot(
    prismaClientOptions?: Prisma.Subset<
      Prisma.PrismaClientOptions,
      Prisma.PrismaClientOptions
    >,
  ): DynamicModule {
    return {
      global: true,
      module: PrismaModule,
      providers: [
        {
          provide: 'PRISMA_CLIENT_OPTIONS',
          useValue: prismaClientOptions,
        },
        PrismaService,
      ],
      exports: [PrismaService, 'PRISMA_CLIENT_OPTIONS'],
    };
  }

  static forFeature(
    modelNameOrNames: PrismaDelegateNames | PrismaDelegateNames[],
  ): DynamicModule {
    const modelNames = Array.isArray(modelNameOrNames)
      ? modelNameOrNames
      : [modelNameOrNames];

    return {
      module: PrismaModule,
      providers: [
        ...modelNames.map((modelName) => ({
          provide: modelName,
          useFactory: (prismaService: PrismaService) => {
            return prismaService[modelName];
          },
          inject: [PrismaService],
        })),
      ],
      exports: [...modelNames],
    };
  }
}
