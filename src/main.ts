import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  const figlet = require('figlet');

  const text = figlet.textSync('ORIGIN - BACKEND', {
    font: 'Bloody',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 150,
    whitespaceBreak: true,
  });

  console.log('\x1b[31m%s\x1b[0m', text);
}
bootstrap();
