import {
  AbilityBuilder,
  createMongoAbility,
  ExtractSubjectType,
  InferSubjects,
  MongoAbility,
} from '@casl/ability';
import { Injectable } from '@nestjs/common';

import { AuthUser } from '../../../types/auth-user';
import { ActionEnums } from '../../enums/action.enums';
import { RoleEnum } from '../../enums/role.enum';
import { PostModel } from '../../post/post.model';
import { UserModel } from '../../user/user.model';

type Subjects = InferSubjects<typeof PostModel | typeof UserModel> | 'all';

export type AppAbility = MongoAbility<[ActionEnums, Subjects]>;

@Injectable()
export class CaslAbilityFactory {
  createForUser(user: AuthUser) {
    const { can, cannot, build, rules } = new AbilityBuilder<AppAbility>(
      createMongoAbility,
    );

    if (user.role === RoleEnum.ADMIN) {
      can(ActionEnums.Manage, 'all'); // read-write access to everything
    } else if (user.role === RoleEnum.WRITER) {
      can(ActionEnums.Create, PostModel); // write access to Post
      can(ActionEnums.Update, PostModel, { authorId: user.id }); // 자신의 글만 수정 가능
    } else {
      can(ActionEnums.Read, 'all'); // read-only access to everything
    }

    cannot(ActionEnums.Delete, PostModel, { isRocked: true }); // isRocked가 true인 글은 삭제 불가능

    return build({
      // Read https://casl.js.org/v6/en/guide/subject-type-detection#use-classes-as-subject-types for details
      detectSubjectType: (item) =>
        item.constructor as ExtractSubjectType<Subjects>,
    });
  }
}
