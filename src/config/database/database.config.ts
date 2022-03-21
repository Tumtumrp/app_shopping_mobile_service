import { ConfigService } from '@nestjs/config';
import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { AccountType } from 'src/app/account-type/entities/account-type.entity';
import { Account } from 'src/app/account/entities/account.entity';
import { Active } from 'src/app/active/entities/active.entity';
import { Address } from 'src/app/address/entities/address.entity';
import { Basket } from 'src/app/basket/entities/basket.entity';
import { Capacity } from 'src/app/capacity/entities/capacity.entity';
import { Color } from 'src/app/color/entities/color.entity';
import { ProductBrand } from 'src/app/product-brand/entities/product-brand.entity';
import { ProductCapacity } from 'src/app/product-capacity/entities/product-capacity.entity';
import { ProductColor } from 'src/app/product-color/entities/product-color.entity';
import { ProductImage } from 'src/app/product-image/entities/product-image.entity';
import { ProductStock } from 'src/app/product-stock/entities/product-stock.entity';
import { Product } from 'src/app/product/entities/product.entity';
import { RefreshToken } from 'src/app/refresh-token/entities/refresh-token.entity';

export class DatabaseConfig {
  public static async getSequelizeOptions(
    configService: ConfigService,
  ): Promise<SequelizeModuleOptions> {
    return new Promise((resolve) => {
      return resolve({
        dialect: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        models: [
          Active,
          AccountType,
          Account,
          RefreshToken,
          Address,
          Basket,
          Color,
          Capacity,
          ProductBrand,
          Product,
          ProductImage,
          ProductColor,
          ProductCapacity,
          ProductStock,
        ],
        autoLoadModels: true,
        synchronize: true,
      });
    });
  }
}
