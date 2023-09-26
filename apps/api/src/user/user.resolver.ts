import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { UserModel } from './user.model';
import { UserService } from './user.service';
import { AuthGuard } from '../auth/auth.guard';
import { CurrentUser } from '../decorators/current-user.decorator';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => UserModel)
  @UseGuards(AuthGuard)
  async me(@CurrentUser() user: Omit<UserModel, 'password'>) {
    console.log(user);
    return this.userService.findOne(user.name);
  }

  @Mutation(() => UserModel)
  async register(
    @Args('name') name: string,
    @Args('password') password: string,
  ) {
    return this.userService.register(name, password);
  }
}
