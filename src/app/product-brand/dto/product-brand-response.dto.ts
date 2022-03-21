import { ApiProperty } from '@nestjs/swagger';

export class ProductBrandResponseDto {
  @ApiProperty({ type: Number })
  productBrandId: number;

  @ApiProperty({ type: String })
  productBrandName: string;

  constructor(partial: Partial<ProductBrandResponseDto>) {
    Object.assign(this, partial);
  }
}
