import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Basket } from './entities/basket.entity';

@Injectable()
export class BasketService {
  constructor(@InjectModel(Basket) private basketModel: typeof Basket) {}
}
