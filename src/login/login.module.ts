import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { AuthService } from 'src/auth/auth.service';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [LoginController],
  providers: [LoginService, AuthService, UsersService, JwtService],
})
export class LoginModule {}
