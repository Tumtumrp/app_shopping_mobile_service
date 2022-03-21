import { ApiProperty } from '@nestjs/swagger';

export class ColorResponseDto {
  @ApiProperty({ type: Number })
  colorId: number;

  @ApiProperty({ type: String })
  colorName: string;

  constructor(partial: Partial<ColorResponseDto>) {
    Object.assign(this, partial);
  }
}
