import { Injectable } from '@nestjs/common';

import { UserModel } from './user.model';
import { RoleEnum } from '../enums/role.enum';

@Injectable()
export class UserService {
  private readonly users: UserModel[] = [
    {
      id: 1,
      role: RoleEnum.ADMIN,
      name: 'admin',
      password: 'admin',
    },
    {
      id: 2,
      role: RoleEnum.MANAGER,
      name: 'manager',
      password: 'manager',
    },
    {
      id: 3,
      role: RoleEnum.GUEST,
      name: 'guest',
      password: 'guest',
    },
  ];

  async findOne(name: string): Promise<UserModel | undefined> {
    return this.users.find((user) => user.name === name);
  }
}
