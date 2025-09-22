import { Get, Post, Body, Controller, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';
import type { LoginRequestBody } from 'src/types';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('login')
  login(@Body() body: LoginRequestBody) {
    return this.usersService.login(body);
  }
}
