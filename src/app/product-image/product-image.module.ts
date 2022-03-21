import { Module } from '@nestjs/common';
import { ProductImageService } from './product-image.service';
import { ProductImageController } from './product-image.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductImage } from './entities/product-image.entity';

@Module({
  imports: [SequelizeModule.forFeature([ProductImage])],
  controllers: [ProductImageController],
  providers: [ProductImageService],
  exports: [ProductImageService, SequelizeModule],
})
export class ProductImageModule {}
