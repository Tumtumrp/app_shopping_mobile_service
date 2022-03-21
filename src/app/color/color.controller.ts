import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/core/decorators/roles.decorator';
import { Role } from 'src/core/enum/role.enum';
import { JwtAuthGuard } from 'src/core/guards/jwt-auth.guard';
import { RoleGuard } from 'src/core/guards/role.guard';
import { ColorService } from './color.service';
import { ColorResponseDto } from './dto/color-response.dto';
import { CreateColorDto } from './dto/create-color.dto';
import { CreateNewColorResponseDto } from './dto/create-new-color-response.dto';
import { DeleteColorResponseDto } from './dto/delete-color-response.dto';
import { UpdateColorResponseDto } from './dto/update-color-response.dto';
import { UpdateColorDto } from './dto/update-color.dto';

@ApiTags('ColorController')
@Controller('color')
export class ColorController {
  constructor(private readonly colorService: ColorService) {}

  @ApiOkResponse({
    description: 'find all color',
    type: [ColorResponseDto],
  })
  @HttpCode(HttpStatus.OK)
  @Get()
  public async findAll(): Promise<ColorResponseDto[]> {
    return this.colorService.findAllColor();
  }

  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'create new color',
    type: CreateNewColorResponseDto,
  })
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RoleGuard)
  @HttpCode(HttpStatus.CREATED)
  @Post('new-color')
  public async createNewColor(
    @Body() request: CreateColorDto,
  ): Promise<CreateNewColorResponseDto> {
    return await this.createNewColor(request);
  }

  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'update color successfully',
    type: UpdateColorResponseDto,
  })
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RoleGuard)
  @HttpCode(HttpStatus.OK)
  @Put('update-color/:id')
  public async updateColor(
    @Param('id') colorId: number,
    @Body() request: UpdateColorDto,
  ): Promise<UpdateColorResponseDto> {
    return await this.colorService.updateColor(colorId, request);
  }

  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'delete color successfully',
    type: DeleteColorResponseDto,
  })
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RoleGuard)
  @HttpCode(HttpStatus.OK)
  @Delete('delete-color/:id')
  public async deleteColor(
    @Param('id', ParseIntPipe) colorId: number,
  ): Promise<DeleteColorResponseDto> {
    return await this.colorService.deleteColor(colorId);
  }
}
