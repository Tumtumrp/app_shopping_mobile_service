import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/core/decorators/roles.decorator';
import { Role } from 'src/core/enum/role.enum';
import { JwtAuthGuard } from 'src/core/guards/jwt-auth.guard';
import { RoleGuard } from 'src/core/guards/role.guard';
import { AccountTypeService } from './account-type.service';
import { AccountTypeResponseDto } from './dto/account-type-response.dto';

@ApiTags('AccountTypeController')
@Controller('account-type')
export class AccountTypeController {
  constructor(private readonly accountTypeService: AccountTypeService) {}

  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'find all type account',
    type: [AccountTypeResponseDto],
  })
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RoleGuard)
  @HttpCode(HttpStatus.OK)
  @Get('')
  public async findAllType(): Promise<AccountTypeResponseDto[]> {
    return await this.accountTypeService.findAll();
  }
}
