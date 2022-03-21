import { Controller } from '@nestjs/common';
import { ProductStockService } from './product-stock.service';

@Controller('product-stock')
export class ProductStockController {
  constructor(private readonly productStockService: ProductStockService) {}
}
