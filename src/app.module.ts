import { Module } from '@nestjs/common';
import { OriginModule } from './origin/origin.module';

@Module({
  imports: [OriginModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
