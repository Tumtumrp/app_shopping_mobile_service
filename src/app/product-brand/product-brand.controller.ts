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
import { CreateProductBrandResponseDto } from './dto/create-product-brand-response.dto';
import { CreateProductBrandDto } from './dto/create-product-brand.dto';
import { ProductBrandResponseDto } from './dto/product-brand-response.dto';
import { UpdateProductBrandDto } from './dto/update-product-brand.dto';
import { ProductBrandService } from './product-brand.service';

@ApiTags('ProductBrandController')
@Controller('product-brand')
export class ProductBrandController {
  constructor(private readonly productBrandService: ProductBrandService) {}

  @ApiOkResponse({
    description: 'find all brand product',
    type: [ProductBrandResponseDto],
  })
  @HttpCode(HttpStatus.OK)
  @Get()
  public async findAll(): Promise<ProductBrandResponseDto[]> {
    return await this.productBrandService.findProductBrand();
  }

  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'create new brand product',
    type: CreateProductBrandResponseDto,
  })
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RoleGuard)
  @HttpCode(HttpStatus.CREATED)
  @Post('new-product-brand')
  public async createNewProductBrand(
    @Body() request: CreateProductBrandDto,
  ): Promise<any> {
    return request;
  }

  @ApiBearerAuth()
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RoleGuard)
  @HttpCode(HttpStatus.OK)
  @Put('update-product-brand/:id')
  public async updateProductBrand(
    @Param('id', ParseIntPipe) productBrandId: number,
    @Body() request: UpdateProductBrandDto,
  ): Promise<any> {
    return { productBrandId, request };
  }

  @ApiBearerAuth()
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RoleGuard)
  @HttpCode(HttpStatus.OK)
  @Delete('delete-product-brand/:id')
  public async deleteProductBrand(
    @Param('id', ParseIntPipe) productBrandId: number,
  ): Promise<any> {
    return productBrandId;
  }
}
