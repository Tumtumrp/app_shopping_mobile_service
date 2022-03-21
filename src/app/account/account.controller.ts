import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/core/decorators/roles.decorator';
import { User } from 'src/core/decorators/user.decorator';
import { Role } from 'src/core/enum/role.enum';
import { JwtAuthGuard } from 'src/core/guards/jwt-auth.guard';
import { RoleGuard } from 'src/core/guards/role.guard';
import { AccountService } from './account.service';
import { UpdateRoleResponseDto } from './dto/update-role-response.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@ApiTags('AccountController')
@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'update role account successfully',
    type: UpdateRoleResponseDto,
  })
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RoleGuard)
  @HttpCode(HttpStatus.OK)
  @Post('update-role')
  public async updateRole(
    @User('_id') accountId: number,
    @Body() request: UpdateRoleDto,
  ): Promise<any> {
    return await this.accountService.updateRole(accountId, request);
  }
}
