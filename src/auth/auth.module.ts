import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { secretKey } from './constants';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: secretKey,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [],
  providers: [AuthService, UsersService, JwtStrategy],
})
export class AuthModule {}
