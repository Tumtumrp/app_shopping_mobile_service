import { Module } from '@nestjs/common';
import { ProductStockService } from './product-stock.service';
import { ProductStockController } from './product-stock.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductStock } from './entities/product-stock.entity';

@Module({
  imports: [SequelizeModule.forFeature([ProductStock])],
  controllers: [ProductStockController],
  providers: [ProductStockService],
  exports: [ProductStockService, SequelizeModule],
})
export class ProductStockModule {}
