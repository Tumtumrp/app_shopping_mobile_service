import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ProductBrandResponseDto } from './dto/product-brand-response.dto';
import { ProductBrand } from './entities/product-brand.entity';

@Injectable()
export class ProductBrandService {
  constructor(
    @InjectModel(ProductBrand) private productBrandModel: typeof ProductBrand,
  ) {}

  private async findAll(): Promise<ProductBrand[]> {
    try {
      return await this.productBrandModel.findAll();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  public async findProductBrand(): Promise<ProductBrandResponseDto[]> {
    const brands: ProductBrand[] = await this.findAll();

    return brands.map((brand) => {
      return new ProductBrandResponseDto({
        productBrandId: brand.productBrandId,
        productBrandName: brand.productBrandName,
      });
    });
  }
}
