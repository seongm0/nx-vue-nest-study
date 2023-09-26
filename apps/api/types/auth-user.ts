import { UserModel } from '../src/user/user.model';

export type AuthUser = Omit<UserModel, 'password'>;
