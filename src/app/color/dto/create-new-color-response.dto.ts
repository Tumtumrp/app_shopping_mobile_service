import { ApiProperty } from '@nestjs/swagger';
import { CreateColorDto } from './create-color.dto';

export class CreateNewColorResponseDto {
  @ApiProperty({ type: Boolean })
  status: boolean;

  @ApiProperty({ type: String })
  message: string;

  @ApiProperty({ type: CreateColorDto })
  color: CreateColorDto;

  constructor(partial: Partial<CreateNewColorResponseDto>) {
    Object.assign(this, partial);
  }
}
