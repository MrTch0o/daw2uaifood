import { UserType } from '@prisma/client';

export class CreateUserDto {
  name: string;
  phone: string;
  password?: string; // Senha é opcional aqui, mas obrigatória na lógica
  type?: UserType;
}
