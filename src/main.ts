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
  const whitelist: string[] = configService.get<string>('ORIGIN').split(',');

  app.use(helmet());

  if (configService.get<string>('NODE_ENV') === 'development') {
    app.enableCors({ origin: '*' });
  } else {
    app.enableCors({
      origin: (origin, cb) => {
        if (whitelist.indexOf(origin) !== -1) {
          cb(null, origin);
        } else {
          logger.log(`blocked cors for: ${origin}`);
          cb(new Error('Not allowed by CORS'));
        }
      },
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type'],
    });
  }
  app.setGlobalPrefix('/api');
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      disableErrorMessages: false,
    }),
  );

  Swagger.run(app, configService);
  await app.listen(port);
  logger.log(`Application server running on port ${port}`);
}
bootstrap();
