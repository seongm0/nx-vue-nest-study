import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SignInInput {
  @Field()
  name: string;
  @Field()
  password: string;
}
