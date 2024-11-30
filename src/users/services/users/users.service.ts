import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Injectable()
export class UsersService {
  private fakeUsers = [{ username: 'W0Ifyy', email: 'w0ifyy@w0ifyy.com' }];
  fetchUsers() {
    return this.fakeUsers;
  }
  createUser(userDetails: CreateUserDto) {
    this.fakeUsers.push(userDetails);
    return;
  }
  fetchUserById(id: number) {
    return { id, username: 'W0Ifyy', email: 'w0ifyy@gmail.com' };
  }
}
