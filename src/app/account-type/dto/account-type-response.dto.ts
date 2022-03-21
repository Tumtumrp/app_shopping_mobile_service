import { ApiProperty } from '@nestjs/swagger';

export class AccountTypeResponseDto {
  @ApiProperty({ type: Number })
  accountTypeId: number;

  @ApiProperty({ type: String })
  accountTypeName: string;

  constructor(partial: Partial<AccountTypeResponseDto>) {
    Object.assign(this, partial);
  }
}
