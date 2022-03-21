import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ColorService } from './color.service';

@ApiTags('ColorController')
@Controller('color')
export class ColorController {
  constructor(private readonly colorService: ColorService) {}
}
