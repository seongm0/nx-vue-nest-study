import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { AuthService } from './auth.service';
import { SignInInput } from './input/sign-in.input';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => String)
  signIn(@Args('input') input: SignInInput) {
    return this.authService.signIn(input.name, input.password);
  }
}
