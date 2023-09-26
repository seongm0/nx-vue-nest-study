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
      role: RoleEnum.WRITER,
      name: 'writer',
      password: 'writer',
    },
    {
      id: 3,
      role: RoleEnum.GUEST,
      name: 'guest',
      password: 'guest',
    },
  ];

  async findOne(name: string): Promise<UserModel | undefined> {
    const user = this.users.find((user) => user.name === name);
    return { ...user };
  }

  async register(name: string, password: string): Promise<UserModel> {
    const user = {
      id: this.users.length + 1,
      role: RoleEnum.GUEST,
      name,
      password,
    };

    this.users.push(user);

    return user;
  }
}
