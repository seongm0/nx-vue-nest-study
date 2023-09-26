import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@InputType('PostInput')
@ObjectType()
export class PostModel {
  @Field(() => Int)
  id!: number;
  @Field()
  title!: string;
  @Field()
  content!: string;
  @Field(() => Boolean)
  isRocked!: boolean;
  @Field(() => Int)
  authorId!: number;

  constructor(data: PostModel) {
    Object.assign(this, data);
  }
}
