import { registerEnumType } from '@nestjs/graphql';

export enum RoleEnum {
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
  GUEST = 'GUEST',
}

registerEnumType(RoleEnum, { name: 'RoleEnum' });
