import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import type { LoginRequestBody, SignupRequestBody } from 'src/types';
import {
  sendUserData,
  validateEmail,
  validatePassword,
  validateUsername,
} from 'src/utils';
import { User, UserDocument } from './users.schema';
import { Model } from 'mongoose';
import bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {}

  async signup(body: SignupRequestBody) {
    const { username, email, password } = body;

    validateUsername(username);
    validateEmail(email);
    validatePassword(password);

    const userExists = await this.UserModel.findOne({
      $or: [{ username: username }, { email: email }],
    });

    if (userExists) {
      throw new ConflictException(
        'A user with such username or email already exists',
      );
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new this.UserModel({
      username: username,
      email: email,
      password: hashedPassword,
    });

    await newUser.save();

    return sendUserData(newUser);
  }

  async login(body: LoginRequestBody) {
    console.log(`${body.username} ${body.password}`);

    const { username, password } = body;

    const user = await this.UserModel.findOne({ username: username });

    if (!user) {
      throw new NotFoundException("A user with this username doesn't exist");
    }

    const passwordMatches = await bcrypt.compare(password, user.password);

    if (!passwordMatches) {
      throw new BadRequestException('Incorrect password');
    }

    return sendUserData(user);
  }
}
