import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<string> {
    const user = await this.userService.findOne(username);

    if (user?.password !== pass) {
      console.log(username, pass);
      console.log(user);
      throw new UnauthorizedException();
    }

    delete user.password;

    return this.jwtService.signAsync(user);
  }
}
