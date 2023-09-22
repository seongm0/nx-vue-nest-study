import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';

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
    return this.userService.findOne(user.name);
  }
}
