import * as path from 'path';

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from '@nx-vue-nest/prisma';

import { AppController } from './app.controller';
import { AppResolver } from './app.resolver';
import { AppService } from './app.service';
import { AuthModule } from '../auth/auth.module';
import { CaslModule } from '../casl/casl.module';
import { PostModule } from '../post/post.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: path.resolve(process.cwd(), 'schema.gql'),
      sortSchema: true,
      context: ({ req }) => ({ req }),
    }),
    JwtModule.register({
      global: true,
      secret: 'secret',
      signOptions: { expiresIn: '1d', algorithm: 'HS256' },
    }),
    PrismaModule.forRoot(),
    CaslModule,
    PostModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
