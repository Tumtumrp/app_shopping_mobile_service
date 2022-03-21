import { ApiProperty } from '@nestjs/swagger';
import { CreateAddressDto } from './create-address.dto';

export class CreateNewAddressResponseDto {
  @ApiProperty({ type: Boolean })
  status: boolean;

  @ApiProperty({ type: String })
  message: string;

  @ApiProperty({ type: CreateAddressDto })
  address: CreateAddressDto;

  constructor(partial: Partial<CreateNewAddressResponseDto>) {
    Object.assign(this, partial);
  }
}
