import { Controller } from '@nestjs/common';
import { ProductBrandService } from './product-brand.service';

@Controller('product-brand')
export class ProductBrandController {
  constructor(private readonly productBrandService: ProductBrandService) {}
}
