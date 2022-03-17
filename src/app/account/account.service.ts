import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Account } from './entities/account.entity';

@Injectable()
export class AccountService {
  constructor(@InjectModel(Account) private accountModel: typeof Account) {}

  public async findByUsernameJoinAccountType(
    username: string,
  ): Promise<Account> {
    try {
      return await this.accountModel.findOne({ where: { username } });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
