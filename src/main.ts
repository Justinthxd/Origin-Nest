import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './middlewares/logger.middleware';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('ORIGIN - Backend')
    .setDescription('The ORIGIN API description')
    .setVersion('1.0')
    .addTag('origin')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const figlet = require('figlet');
  const text = figlet.textSync('ORIGIN - BACKEND', {
    font: 'Bloody',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 150,
    whitespaceBreak: true,
  });

  await app.listen(3000);

  console.log('');
  console.log('\x1b[31m%s\x1b[0m', text);
}
bootstrap();
