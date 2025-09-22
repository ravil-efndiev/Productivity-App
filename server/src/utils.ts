import { BadRequestException } from "@nestjs/common";

export function validatePassword(password: string) {
  const spaceRegex = /^[^\s]+$/;
  if (password.length < 6) throw new BadRequestException('Password has to be 6 characters or longer');
  if (password.length > 30) throw new BadRequestException('Password is too long');
  if (!spaceRegex.test(password)) throw new BadRequestException('Password must not contain any spaces');
}

export function validateUsername(username: string) {
  const regex = /^[A-Za-z0-9_]+$/;
  if (username.length < 5) throw new BadRequestException('Username has to be 5 characters or longer');
  if (username.length > 24) throw new BadRequestException('Username has to be shorter than 24 characters');
  if (!regex.test(username)) throw new BadRequestException('Username can only contain letters, numbers and underscores');
}

export function validateEmail(email: string) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regex.test(email)) throw new BadRequestException('Invalid email!');
}
