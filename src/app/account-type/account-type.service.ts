import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { AccountTypeResponseDto } from './dto/account-type-response.dto';
import { AccountType } from './entities/account-type.entity';

@Injectable()
export class AccountTypeService {
  constructor(
    @InjectModel(AccountType) private accountTypeModel: typeof AccountType,
  ) {}

  public async findAll(): Promise<AccountTypeResponseDto[]> {
    try {
      const types: AccountType[] = await this.accountTypeModel.findAll();

      return types.map((type) => {
        return new AccountTypeResponseDto({
          accountTypeId: type.accountTypeId,
          accountTypeName: type.accountTypeName,
        });
      });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
