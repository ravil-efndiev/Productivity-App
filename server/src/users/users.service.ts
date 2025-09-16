import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = ["raf", "ravus"]

    getUsers() {
        return this.users;
    }
}
