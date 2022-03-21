import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCapacityDto {
  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  capacityName: string;

  constructor(partial: Partial<CreateCapacityDto>) {
    Object.assign(this, partial);
  }
}
