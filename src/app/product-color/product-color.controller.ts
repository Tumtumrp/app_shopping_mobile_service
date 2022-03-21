import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductColorService } from './product-color.service';

@ApiTags('ProductColorController')
@Controller('product-color')
export class ProductColorController {
  constructor(private readonly productColorService: ProductColorService) {}
}
