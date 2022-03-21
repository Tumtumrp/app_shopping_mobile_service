import { Module } from '@nestjs/common';
import { BasketService } from './basket.service';
import { BasketController } from './basket.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Basket } from './entities/basket.entity';

@Module({
  imports: [SequelizeModule.forFeature([Basket])],
  controllers: [BasketController],
  providers: [BasketService],
  exports: [BasketService, SequelizeModule],
})
export class BasketModule {}
