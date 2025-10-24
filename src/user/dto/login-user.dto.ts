import { IsPhoneNumber, IsString, IsStrongPassword } from 'class-validator';

export class LoginUserDto {
  @IsString()
  @IsPhoneNumber('BR', { message: 'Número de telefone inválido' })
  phone: string;

  @IsString()
  @IsStrongPassword({ minLength: 8 }, { message: 'Senha fraca' })
  password: string;
}
