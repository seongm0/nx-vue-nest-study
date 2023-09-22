import { Injectable } from '@nestjs/common';
import { Query } from '@nestjs/graphql';

@Injectable()
export class AppResolver {
  @Query(() => String)
  async hello() {
    return 'Hello world!';
  }
}
