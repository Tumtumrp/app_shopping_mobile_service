import { Controller } from '@nestjs/common';
import { ProductCapacityService } from './product-capacity.service';

@Controller('product-capacity')
export class ProductCapacityController {
  constructor(
    private readonly productCapacityService: ProductCapacityService,
  ) {}
}
