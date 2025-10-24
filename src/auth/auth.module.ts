import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module'; // 1. Importar UserModule
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UserModule, // 2. Adicionar UserModule aos imports
    PassportModule,
    JwtModule.register({
      secret: 'SUA_CHAVE_SECRETA_MUITO_FORTE', // 3. Adicionar uma chave secreta
      signOptions: { expiresIn: '1d' }, // 4. Token expira em 1 dia
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
