import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [{ username: 'W0Ifyy', email: 'w0ifyy@w0ifyy.com' }];
  fetchUsers() {
    return this.fakeUsers;
  }
  createUser(userDetails: CreateUserType) {
    this.fakeUsers.push(userDetails);
    return;
  }
}
