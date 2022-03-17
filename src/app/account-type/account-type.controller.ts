import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AccountTypeService } from './account-type.service';

@ApiTags('AccountTypeController')
@Controller('account-type')
export class AccountTypeController {
  constructor(private readonly accountTypeService: AccountTypeService) {}
}
