import { Module } from '@nestjs/common';
import { ProductBrandService } from './product-brand.service';
import { ProductBrandController } from './product-brand.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductBrand } from './entities/product-brand.entity';

@Module({
  imports: [SequelizeModule.forFeature([ProductBrand])],
  controllers: [ProductBrandController],
  providers: [ProductBrandService],
  exports: [ProductBrandService, SequelizeModule],
})
export class ProductBrandModule {}
