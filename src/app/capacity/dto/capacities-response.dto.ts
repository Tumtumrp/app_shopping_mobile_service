import { ApiProperty } from '@nestjs/swagger';

export class CapacitiesResponseDto {
  @ApiProperty({ type: Number })
  capacityId: number;

  @ApiProperty({ type: String })
  capacityName: string;

  constructor(partial: Partial<CapacitiesResponseDto>) {
    Object.assign(this, partial);
  }
}
