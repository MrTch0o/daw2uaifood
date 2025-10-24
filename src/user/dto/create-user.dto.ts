import { UserType } from '@prisma/client';
import {
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  @IsPhoneNumber('BR', { message: 'Número de telefone inválido' })
  phone: string;

  @IsString()
  @IsStrongPassword(
    { minLength: 8 },
    {
      message:
        'Senha fraca. Deve conter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula, um número e um caractere especial',
    },
  )
  password?: string; // Senha é opcional aqui, mas obrigatória na lógica

  @IsOptional()
  type?: UserType;
}
