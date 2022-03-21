import { ApiProperty } from '@nestjs/swagger';

export class DeleteCapacityResponseDto {
  @ApiProperty({ type: Boolean })
  status: boolean;

  @ApiProperty({ type: String })
  message: string;

  @ApiProperty({ type: Number })
  capacity: number;

  constructor(partial: Partial<DeleteCapacityResponseDto>) {
    Object.assign(this, partial);
  }
}
