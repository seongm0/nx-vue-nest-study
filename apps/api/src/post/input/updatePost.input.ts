import { InputType, OmitType, PartialType } from '@nestjs/graphql';

import { PostModel } from '../post.model';

@InputType()
export class UpdatePostInput extends PartialType(
  OmitType(PostModel, ['id'] as const, InputType),
) {}
