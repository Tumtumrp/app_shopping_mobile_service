import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ActiveService } from './active.service';

@ApiTags('ActiveController')
@Controller('active')
export class ActiveController {
  constructor(private readonly activeService: ActiveService) {}
}
