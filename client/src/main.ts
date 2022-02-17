import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { HeroModule } from './hero/hero.module';

async function bootstrap() {
  const app = await NestFactory.create(HeroModule);
  app.listen(8687);
}
bootstrap();
