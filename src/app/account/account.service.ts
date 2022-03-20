import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UpdateRoleResponseDto } from './dto/update-role-response.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Account } from './entities/account.entity';

@Injectable()
export class AccountService {
  constructor(@InjectModel(Account) private accountModel: typeof Account) {}

  private async updateTypeAccountIdByAccountId(
    accountTypeId: number,
    accountId: number,
  ): Promise<boolean> {
    try {
      const updated = await this.accountModel.update(
        { accountTypeId },
        { where: { accountId: accountId } },
      );
      if (!updated) return false;

      return true;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  public async updateRole(
    accountId: number,
    request: UpdateRoleDto,
  ): Promise<UpdateRoleResponseDto> {
    const updateRole: boolean = await this.updateTypeAccountIdByAccountId(
      accountId,
      request.role,
    );
    if (!updateRole) throw new BadRequestException();

    return new UpdateRoleResponseDto({
      status: updateRole,
      message: 'update role account successfully',
    });
  }
}
