import { registerEnumType } from '@nestjs/graphql';

export enum RoleEnum {
  ADMIN = 'ADMIN',
  WRITER = 'WRITER',
  GUEST = 'GUEST',
}

registerEnumType(RoleEnum, { name: 'RoleEnum' });
