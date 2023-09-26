import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { UpdatePostInput } from './input/updatePost.input';
import { PostModel } from './post.model';
import { PostService } from './post.service';
import { AuthGuard } from '../auth/auth.guard';
import { AppAbility } from '../casl/factories/casl-ability.factory';
import { CheckPolicies } from '../decorators/check-policies.decorator';
import { ActionEnums } from '../enums/action.enums';
import { PoliciesGuard } from '../guards/policies.guard';

@Resolver()
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Query(() => [PostModel])
  async posts(): Promise<PostModel[]> {
    return this.postService.findAll();
  }

  @Query(() => PostModel)
  async post(@Args('id') id: number): Promise<PostModel> {
    return this.postService.findOne(id);
  }

  @Mutation(() => PostModel)
  @UseGuards(AuthGuard, PoliciesGuard)
  @CheckPolicies((ability: AppAbility) =>
    ability.can(ActionEnums.Create, PostModel),
  )
  async createPost(@Args('input') input: PostModel): Promise<PostModel> {
    return this.postService.create(input);
  }

  @Mutation(() => PostModel)
  @UseGuards(AuthGuard, PoliciesGuard)
  @CheckPolicies((ability: AppAbility) =>
    ability.can(ActionEnums.Update, PostModel),
  )
  async updatePost(
    @Args('id') id: number,
    @Args('input') input: UpdatePostInput,
  ): Promise<PostModel> {
    return this.postService.update(id, input);
  }

  @Mutation(() => PostModel)
  async deletePost(@Args('id') id: number): Promise<PostModel> {
    return this.postService.delete(id);
  }
}
