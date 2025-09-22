import { BadRequestException, Injectable } from '@nestjs/common';
import type { LoginRequestBody } from 'src/types';

@Injectable()
export class UsersService {
  login(body: LoginRequestBody) {
    console.log(`${body.username} ${body.password}`);
    if (body.password.length < 5) {
      throw new BadRequestException("Password too short");
    }
    return {
      user: {
        username: body.username
      }
    };
  }
}
