import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateColorDto {
  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  colorName: string;

  constructor(partial: Partial<CreateColorDto>) {
    Object.assign(this, partial);
  }
}
