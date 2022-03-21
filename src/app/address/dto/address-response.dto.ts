import { ApiProperty } from '@nestjs/swagger';
import { DefaultSand } from 'src/core/enum/default-sand.enum';

export class AddressResponseDto {
  @ApiProperty({ type: Number })
  addressId: number;

  @ApiProperty({ type: String })
  fullName: string;

  @ApiProperty({ type: String })
  phoneNumber: string;

  @ApiProperty({ type: String })
  province: string;

  @ApiProperty({ type: String })
  district: string;

  @ApiProperty({ type: String })
  ZipCode: string;

  @ApiProperty({ type: String })
  line: string;

  @ApiProperty({ enum: DefaultSand })
  defaultSand: DefaultSand;

  constructor(partial: Partial<AddressResponseDto>) {
    Object.assign(this, partial);
  }
}
