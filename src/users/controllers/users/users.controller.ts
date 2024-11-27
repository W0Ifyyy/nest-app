import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return [{ username: 'W0Ifyy', email: 'w0ifyy@w0ifyy.com' }];
  }

  @Get('posts')
  getUsersPosts() {
    return [
      {
        username: 'W0Ifyy',
        email: 'w0ifyy@w0ifyy.com',
        posts: [
          { id: 1, title: 'Post 1' },
          { id: 2, title: 'Post 2' },
        ],
      },
    ];
  }
  @Get('posts/comments')
  getUsersPostsComments() {
    return [
      {
        id: 1,
        title: 'Post 1',
        comments: [],
      },
    ];
  }
}
