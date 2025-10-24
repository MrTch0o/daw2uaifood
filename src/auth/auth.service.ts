import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    phone: string,
    pass: string,
  ): Promise<Omit<User, 'password'> | null> {
    const user = await this.userService.findByPhone(phone);
    if (user && (await bcrypt.compare(pass, user.password))) {
      return user;
    }
    return null;
  }

  login(user: Omit<User, 'password'>) {
    const payload = { sub: user.id, phone: user.phone, role: user.type };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
}
