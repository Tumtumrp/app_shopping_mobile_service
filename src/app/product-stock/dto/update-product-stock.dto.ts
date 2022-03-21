import { PartialType } from '@nestjs/swagger';
import { CreateProductStockDto } from './create-product-stock.dto';

export class UpdateProductStockDto extends PartialType(CreateProductStockDto) {}
