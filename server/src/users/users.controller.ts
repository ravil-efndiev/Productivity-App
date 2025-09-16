import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get("getAll")
  getAll() {
    return this.usersService.getUsers();
  }
}
