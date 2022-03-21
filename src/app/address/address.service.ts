import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { AddressResponseDto } from './dto/address-response.dto';
import { CreateAddressDto } from './dto/create-address.dto';
import { CreateNewAddressResponseDto } from './dto/create-new-address-response.dto';
import { Address } from './entities/address.entity';

@Injectable()
export class AddressService {
  constructor(@InjectModel(Address) private addressModel: typeof Address) {}

  private async createAddress(
    accountId: number,
    address: CreateAddressDto,
  ): Promise<Address> {
    try {
      return await this.addressModel.create({
        accountId: accountId,
        fullName: address.fullName,
        phoneNumber: address.phoneNumber,
        province: address.province,
        district: address.district,
        ZipCode: address.ZipCode,
        line: address.line,
        defaultSand: address.defaultSand,
      });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  public async findAllByAccountId(
    accountId: number,
  ): Promise<AddressResponseDto[]> {
    try {
      const addresses: Address[] = await this.addressModel.findAll({
        where: { account_id: accountId },
      });

      return addresses.map((address) => {
        return new AddressResponseDto({
          addressId: address.addressId,
          fullName: address.fullName,
          phoneNumber: address.phoneNumber,
          province: address.province,
          district: address.district,
          ZipCode: address.ZipCode,
          line: address.line,
          defaultSand: address.defaultSand,
        });
      });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  public async createNewAddress(
    accountId: number,
    request: CreateAddressDto,
  ): Promise<CreateNewAddressResponseDto> {
    const address: Address = await this.createAddress(accountId, request);
    if (!address) throw new InternalServerErrorException();

    return new CreateNewAddressResponseDto({
      status: true,
      message: 'create new address successfully',
      address: request,
    });
  }
}
