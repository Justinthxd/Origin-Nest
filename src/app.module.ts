import { Module } from '@nestjs/common';
import { OriginModule } from './origin/origin.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [OriginModule, LoginModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
