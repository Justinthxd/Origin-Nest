import { Module } from '@nestjs/common';
import { OriginModule } from './origin/origin.module';
import { LoginModule } from './login/login.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [OriginModule, LoginModule, AuthModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
