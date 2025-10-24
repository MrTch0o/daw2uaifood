import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';

// Este DTO será criado no próximo passo
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<Omit<User, 'password'>> {
    const { name, phone, password, type } = createUserDto;

    const userExists = await this.findByPhone(phone);
    if (userExists) {
      throw new ConflictException('Um usuário com este telefone já existe.');
    }

    const hashedPassword = await bcrypt.hash(password as string, 10);

    const user = await this.prisma.user.create({
      data: {
        name,
        phone,
        password: hashedPassword,
        type,
      },
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...result } = user;
    return result;
  }

  async findByPhone(phone: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        phone,
      },
    });
  }

  async findOne(id: number): Promise<Omit<User, 'password'> | null> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) return null;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = user;
    return result;
  }
}
