import { Module } from '@nestjs/common';
import { ProductColorService } from './product-color.service';
import { ProductColorController } from './product-color.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductColor } from './entities/product-color.entity';

@Module({
  imports: [SequelizeModule.forFeature([ProductColor])],
  controllers: [ProductColorController],
  providers: [ProductColorService],
  exports: [ProductColorService, SequelizeModule],
})
export class ProductColorModule {}
