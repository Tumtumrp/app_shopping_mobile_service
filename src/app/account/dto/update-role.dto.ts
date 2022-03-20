import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateRoleDto {
  @ApiProperty({ type: Number })
  @IsNotEmpty()
  @IsNumber()
  role: number;

  constructor(partial: Partial<UpdateRoleDto>) {
    Object.assign(this, partial);
  }
}
