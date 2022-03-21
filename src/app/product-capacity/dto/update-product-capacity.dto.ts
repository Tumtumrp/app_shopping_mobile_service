import { PartialType } from '@nestjs/swagger';
import { CreateProductCapacityDto } from './create-product-capacity.dto';

export class UpdateProductCapacityDto extends PartialType(
  CreateProductCapacityDto,
) {}
