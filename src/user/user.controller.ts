import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  NotFoundException,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const user = await this.userService.findOne(id);
    if (!user) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado.`);
    }
    return user;
  }
}
