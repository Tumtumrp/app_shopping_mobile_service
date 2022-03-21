import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString, Length } from 'class-validator';
import { DefaultSand } from 'src/core/enum/default-sand.enum';

export class CreateAddressDto {
  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  @Length(1, 200)
  fullName: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  @Length(10, 10)
  phoneNumber: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  @Length(1, 150)
  province: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  @Length(1, 150)
  district: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  @Length(5, 5)
  ZipCode: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  line: string;

  @ApiProperty({ enum: DefaultSand, default: DefaultSand.HOME })
  @IsNotEmpty()
  @IsEnum(DefaultSand)
  defaultSand: DefaultSand;

  constructor(partial: Partial<CreateAddressDto>) {
    Object.assign(this, partial);
  }
}
