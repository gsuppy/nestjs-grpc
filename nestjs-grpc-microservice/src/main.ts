import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { microserviceOptions } from './grpc.options';

async function bootstrap() {
  const logger = new Logger('Main');

  const app = await NestFactory.createMicroservice(
    AppModule,
    microserviceOptions,
  );

  app.listen(() => {
    logger.log('Microservice is listening...');
  });
}
bootstrap();
