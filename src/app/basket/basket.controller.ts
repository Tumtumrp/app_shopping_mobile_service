import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BasketService } from './basket.service';

@ApiTags('BasketController')
@Controller('basket')
export class BasketController {
  constructor(private readonly basketService: BasketService) {}
}
