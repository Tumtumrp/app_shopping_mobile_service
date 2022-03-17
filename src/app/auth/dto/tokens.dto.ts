import { ApiProperty } from '@nestjs/swagger';

export class TokensDto {
  @ApiProperty({ type: String })
  accessToken: string;

  @ApiProperty({ type: String })
  refreshToken: string;

  constructor(partial: Partial<TokensDto>) {
    Object.assign(this, partial);
  }
}
