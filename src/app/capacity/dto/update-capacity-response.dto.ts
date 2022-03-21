import { ApiProperty } from '@nestjs/swagger';

export class UpdateCapacityResponseDto {
  @ApiProperty({ type: Boolean })
  status: boolean;

  @ApiProperty({ type: String })
  message: string;

  @ApiProperty({ type: Number })
  capacity: number;

  @ApiProperty({ type: String })
  capacityName: string;

  constructor(partial: Partial<UpdateCapacityResponseDto>) {
    Object.assign(this, partial);
  }
}
