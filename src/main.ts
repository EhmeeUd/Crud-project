import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { CrudModule } from './crud/crud.module';

async function bootstrap() {
  const app = await NestFactory.create(CrudModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
