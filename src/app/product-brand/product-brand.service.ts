import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ProductBrand } from './entities/product-brand.entity';

@Injectable()
export class ProductBrandService {
  constructor(
    @InjectModel(ProductBrand) private productBrandModel: typeof ProductBrand,
  ) {}
}
