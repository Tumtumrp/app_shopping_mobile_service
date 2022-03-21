import { ApiProperty } from '@nestjs/swagger';

export class UpdateColorResponseDto {
  @ApiProperty({ type: Boolean })
  status: boolean;

  @ApiProperty({ type: String })
  message: string;

  @ApiProperty({ type: Number })
  color: number;

  @ApiProperty({ type: String })
  colorName: string;

  constructor(partial: Partial<UpdateColorResponseDto>) {
    Object.assign(this, partial);
  }
}
