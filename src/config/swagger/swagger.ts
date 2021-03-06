import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { swaggerConfig } from './swagger.config';

export class Swagger {
  public static run(app: INestApplication, configService: ConfigService): void {
    const document: DocumentBuilder = new DocumentBuilder()
      .setTitle(swaggerConfig.title)
      .setDescription(swaggerConfig.description)
      .setVersion(swaggerConfig.version);
    for (const tag of swaggerConfig.tags) {
      document.addTag(tag);
    }
    document.addServer(`http://localhost:${configService.get<number>('PORT')}`);
    document.addBasicAuth();
    document.addBearerAuth();

    const config = document.build();
    const setup = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('/api/v1', app, setup);
  }
}
