import { ApiProperty } from '@nestjs/swagger';

export class DeleteColorResponseDto {
  @ApiProperty({ type: Boolean })
  status: boolean;

  @ApiProperty({ type: String })
  message: string;

  @ApiProperty({ type: Number })
  color: number;

  constructor(partial: Partial<DeleteColorResponseDto>) {
    Object.assign(this, partial);
  }
}
