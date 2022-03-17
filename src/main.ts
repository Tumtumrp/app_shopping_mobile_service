import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { Swagger } from './config/swagger/swagger';

async function bootstrap() {
  const logger = new Logger('Application');
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService: ConfigService = app.get(ConfigService);
  const port: number = configService.get<number>('PORT');
  // const whitelist = configService.get<string[]>('ORIGIN');

  app.use(helmet());
  app.enableCors({
    origin: '*',
  });
  app.setGlobalPrefix('/api');
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      disableErrorMessages: false,
    }),
  );

  Swagger.run(app);
  await app.listen(port);
  logger.log(`Application server running on port ${port}`);
}
bootstrap();
