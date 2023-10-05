import { defineAbility, MongoAbility } from '@casl/ability';

type Actions = 'create' | 'read' | 'update' | 'delete';
type Subjects = 'Post' | 'User' | 'all';

export type AppAbility = MongoAbility<[Actions, Subjects]>;

export default defineAbility<AppAbility>((can, cannot) => {
  can('read', 'all');
  cannot('delete', 'all');
  cannot('create', 'all');
  cannot('update', 'all');
});

const 어빌리티 = defineAbility<AppAbility>((can, cannot) => {
  can('read', 'all');
  cannot('delete', 'all');
  cannot('create', 'all');
  cannot('update', 'all');
});

어빌리티.can('read', 'Post'); // true

어빌리티.can('create', 'User'); // false
