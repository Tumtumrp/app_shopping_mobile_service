import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { AccountType } from './entities/account-type.entity';

@Injectable()
export class AccountTypeService {
  constructor(
    @InjectModel(AccountType) private accountTypeModel: typeof AccountType,
  ) {}
}
