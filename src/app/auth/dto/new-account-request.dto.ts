import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class NewAccountRequestDto {
  @ApiProperty({ type: String })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({ type: String, default: 'test@test.com' })
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ type: String, default: '123456_aA' })
  @IsString()
  @IsNotEmpty()
  password: string;

  constructor(partial: Partial<NewAccountRequestDto>) {
    Object.assign(this, partial);
  }
}
