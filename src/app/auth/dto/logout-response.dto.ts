import { ApiProperty } from '@nestjs/swagger';

export class LogoutResponseDto {
  @ApiProperty({ type: Boolean })
  status: boolean;

  constructor(partial: Partial<LogoutResponseDto>) {
    Object.assign(this, partial);
  }
}
