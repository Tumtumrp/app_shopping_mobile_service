import { Module } from '@nestjs/common';
import { BasketService } from './basket.service';
import { BasketController } from './basket.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Basket } from './entities/basket.entity';
import { SequelizeMethod } from 'sequelize/types/utils';

@Module({
  imports: [SequelizeModule.forFeature([Basket])],
  controllers: [BasketController],
  providers: [BasketService],
  exports: [BasketService, SequelizeMethod],
})
export class BasketModule {}
