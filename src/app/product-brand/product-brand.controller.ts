import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductBrandService } from './product-brand.service';

@ApiTags('ProductBrandController')
@Controller('product-brand')
export class ProductBrandController {
  constructor(private readonly productBrandService: ProductBrandService) {}
}
