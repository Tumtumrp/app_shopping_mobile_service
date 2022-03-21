import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductImageService } from './product-image.service';

@ApiTags('ProductImageController')
@Controller('product-image')
export class ProductImageController {
  constructor(private readonly productImageService: ProductImageService) {}
}
