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
import { CapacityService } from './capacity.service';
import { CapacitiesResponseDto } from './dto/capacities-response.dto';
import { CreateCapacityDto } from './dto/create-capacity.dto';
import { CreateNewCapacityResponseDto } from './dto/create-new-capacity-response.dto';
import { DeleteCapacityResponseDto } from './dto/delete-capacity-response.dto';
import { UpdateCapacityDto } from './dto/update-capacity.dto';

@ApiTags('CapacityController')
@Controller('capacity')
export class CapacityController {
  constructor(private readonly capacityService: CapacityService) {}

  @ApiOkResponse({
    description: 'find all capacity',
    type: [CapacitiesResponseDto],
  })
  @HttpCode(HttpStatus.OK)
  @Get()
  public async findAll(): Promise<CapacitiesResponseDto[]> {
    return await this.capacityService.findAllCapacity();
  }

  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'create new capacity successfully',
    type: CreateNewCapacityResponseDto,
  })
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RoleGuard)
  @HttpCode(HttpStatus.CREATED)
  @Post('new-capacity')
  public async createNewCapacity(
    @Body() request: CreateCapacityDto,
  ): Promise<CreateNewCapacityResponseDto> {
    return await this.capacityService.createNewCapacity(request);
  }

  @ApiBearerAuth()
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RoleGuard)
  @HttpCode(HttpStatus.OK)
  @Put('update-capacity/:id')
  public async updateCapacity(
    @Param('id', ParseIntPipe) capacityId: number,
    @Body() request: UpdateCapacityDto,
  ): Promise<any> {
    return { capacityId, request };
  }

  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'delete capacity by id successfully',
    type: DeleteCapacityResponseDto,
  })
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RoleGuard)
  @HttpCode(HttpStatus.OK)
  @Delete('delete-capacity/:id')
  public async deleteCapacity(
    @Param('id', ParseIntPipe) capacityId: number,
  ): Promise<DeleteCapacityResponseDto> {
    return await this.deleteCapacity(capacityId);
  }
}
