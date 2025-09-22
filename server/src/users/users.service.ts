import { BadRequestException, Injectable } from '@nestjs/common';
import type { LoginRequestBody, SignupRequestBody } from 'src/types';
import { validateEmail, validatePassword, validateUsername } from 'src/utils';

@Injectable()
export class UsersService {
  signup(body: SignupRequestBody) {
    validateUsername(body.username);
    validateEmail(body.email);
    validatePassword(body.password);
    
    return {
      user: {
        username: body.username
      }
    };
  }

  login(body: LoginRequestBody) {
    console.log(`${body.username} ${body.password}`);
    return {
      user: {
        username: body.username
      }
    };
  }
}
