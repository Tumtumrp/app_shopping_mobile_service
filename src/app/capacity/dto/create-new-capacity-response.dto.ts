import { ApiProperty } from '@nestjs/swagger';
import { CreateCapacityDto } from './create-capacity.dto';

export class CreateNewCapacityResponseDto {
  @ApiProperty({ type: Boolean })
  status: boolean;

  @ApiProperty({ type: String })
  message: string;

  @ApiProperty({ type: CreateCapacityDto })
  capacity: CreateCapacityDto;

  constructor(partial: Partial<CreateNewCapacityResponseDto>) {
    Object.assign(this, partial);
  }
}
