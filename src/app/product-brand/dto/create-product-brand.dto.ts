import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProductBrandDto {
  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  productBrandName: string;

  constructor(partial: Partial<CreateProductBrandDto>) {
    Object.assign(this, partial);
  }
}
