import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductService } from './product.service';

@ApiTags('ProductController')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
}
