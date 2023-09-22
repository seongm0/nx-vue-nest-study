import {
  Ability,
  AbilityBuilder,
  AbilityClass,
  ExtractSubjectType,
  InferSubjects,
} from '@casl/ability';
import { Injectable } from '@nestjs/common';

import { ArticleModel } from '../../article/article.model';
import { ActionEnums } from '../../enums/action.enums';
import { RoleEnum } from '../../enums/role.enum';
import { UserModel } from '../../user/user.model';

type Subjects = InferSubjects<typeof ArticleModel | typeof UserModel> | 'all';

export type AppAbility = Ability<[ActionEnums, Subjects]>;

@Injectable()
export class CaslAbilityFactory {
  createForUser(user: UserModel) {
    const { can, cannot, build, rules } = new AbilityBuilder<
      Ability<[ActionEnums, Subjects]>
    >(Ability as AbilityClass<AppAbility>);

    if (user.role === RoleEnum.ADMIN) {
      can(ActionEnums.Manage, 'all'); // read-write access to everything
    } else {
      can(ActionEnums.Read, 'all'); // read-only access to everything
    }

    can(ActionEnums.Update, ArticleModel, { authorId: user.id });
    cannot(ActionEnums.Delete, ArticleModel, { isRocked: true });

    return build({
      // Read https://casl.js.org/v6/en/guide/subject-type-detection#use-classes-as-subject-types for details
      detectSubjectType: (item) =>
        item.constructor as ExtractSubjectType<Subjects>,
    });
  }
}
