import { Get, Post, Body, Controller, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';
import type { LoginRequestBody, SignupRequestBody } from 'src/types';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  signup(@Body() body: SignupRequestBody) {
    return this.usersService.signup(body);
  }

  @Post('login')
  login(@Body() body: LoginRequestBody) {
    return this.usersService.login(body);
  }
}
