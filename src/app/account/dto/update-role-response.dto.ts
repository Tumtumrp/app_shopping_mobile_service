import { ApiProperty } from '@nestjs/swagger';

export class UpdateRoleResponseDto {
  @ApiProperty({ type: Boolean })
  status: boolean;

  @ApiProperty({ type: String })
  message: string;

  constructor(partial: Partial<UpdateRoleResponseDto>) {
    Object.assign(this, partial);
  }
}
