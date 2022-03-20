import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Address } from './entities/address.entity';

@Injectable()
export class AddressService {
  constructor(@InjectModel(Address) private addressModel: typeof Address) {}
}
