import { Module } from '@nestjs/common';
import { ProductCapacityService } from './product-capacity.service';
import { ProductCapacityController } from './product-capacity.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductCapacity } from './entities/product-capacity.entity';

@Module({
  imports: [SequelizeModule.forFeature([ProductCapacity])],
  controllers: [ProductCapacityController],
  providers: [ProductCapacityService],
  exports: [ProductCapacityService, SequelizeModule],
})
export class ProductCapacityModule {}
