import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { grpcClientOptions } from './grpc-hero.options';
import { HeroModule } from './hero/hero.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(HeroModule, grpcClientOptions);
  await app.listen();
}
bootstrap();
