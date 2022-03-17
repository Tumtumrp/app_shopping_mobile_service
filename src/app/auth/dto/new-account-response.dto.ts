import { ApiProperty } from '@nestjs/swagger';

export class NewAccountResponseDto {
  @ApiProperty({ type: String })
  statusCode: number;

  @ApiProperty({ type: String })
  message: string;

  constructor(partial: Partial<NewAccountResponseDto>) {
    Object.assign(this, partial);
  }
}
