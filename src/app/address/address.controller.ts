import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { User } from 'src/core/decorators/user.decorator';
import { JwtAuthGuard } from 'src/core/guards/jwt-auth.guard';
import { AddressService } from './address.service';
import { AddressResponseDto } from './dto/address-response.dto';
import { CreateAddressDto } from './dto/create-address.dto';
import { CreateNewAddressResponseDto } from './dto/create-new-address-response.dto';

@ApiTags('AddressController')
@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'find all address by account id',
    type: [AddressResponseDto],
  })
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Get()
  public async findAllByAccountId(
    @User('_id') accountId: number,
  ): Promise<AddressResponseDto[]> {
    return await this.addressService.findAllByAccountId(accountId);
  }

  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'create new address successfully',
    type: CreateNewAddressResponseDto,
  })
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.CREATED)
  @Post('new-address')
  public async createNewAddress(
    @User('_id') accountId: number,
    @Body() request: CreateAddressDto,
  ): Promise<CreateNewAddressResponseDto> {
    return await this.addressService.createNewAddress(accountId, request);
  }
}
