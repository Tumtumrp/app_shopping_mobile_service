import { PartialType } from '@nestjs/swagger';
import { CreateAccountTypeDto } from './create-account-type.dto';

export class UpdateAccountTypeDto extends PartialType(CreateAccountTypeDto) {}
