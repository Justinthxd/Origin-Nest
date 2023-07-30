import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { OriginController } from './origin.controller';
import { OriginService } from './origin.service';
import { logger } from 'src/middlewares/logger.middleware';

@Module({
  controllers: [OriginController],
  providers: [OriginService],
})
export class OriginModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(logger).forRoutes('origin');
  // }
}
