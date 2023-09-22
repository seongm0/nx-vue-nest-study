import { Field, Int, ObjectType } from '@nestjs/graphql';

import { RoleEnum } from '../enums/role.enum';

@ObjectType()
export class UserModel {
  @Field(() => Int)
  id: number;
  @Field(() => String)
  name: string;
  @Field(() => String)
  password: string;
  @Field(() => RoleEnum)
  role: RoleEnum;

  constructor(data: UserModel) {
    Object.assign(this, data);
  }
}
