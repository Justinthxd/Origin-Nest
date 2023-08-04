import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { OriginController } from './origin.controller';
import { OriginService } from './origin.service';

@Module({
  controllers: [OriginController],
  providers: [OriginService],
})
export class OriginModule {}
