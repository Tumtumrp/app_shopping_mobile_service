import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configuration } from './config/env/configuration';
import { DatabaseModule } from './config/database/database.module';
import { AccountTypeModule } from './app/account-type/account-type.module';
import { AccountModule } from './app/account/account.module';
import { ActiveModule } from './app/active/active.module';
import { RefreshTokenModule } from './app/refresh-token/refresh-token.module';
import { AuthModule } from './app/auth/auth.module';
import { AddressModule } from './app/address/address.module';
import { BasketModule } from './app/basket/basket.module';
import { ProductBrandModule } from './app/product-brand/product-brand.module';
import { ProductModule } from './app/product/product.module';
import { ColorModule } from './app/color/color.module';
import { ProductColorModule } from './app/product-color/product-color.module';
import { ProductImageModule } from './app/product-image/product-image.module';
import { CapacityModule } from './app/capacity/capacity.module';
import { ProductCapacityModule } from './app/product-capacity/product-capacity.module';
import { ProductStockModule } from './app/product-stock/product-stock.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}\\src\\resource\\.${
        process.env.NODE_ENV
      }.env`,
      load: [configuration],
      isGlobal: true,
    }),
    DatabaseModule,
    AccountTypeModule,
    AccountModule,
    ActiveModule,
    RefreshTokenModule,
    AuthModule,
    AddressModule,
    BasketModule,
    ProductBrandModule,
    ProductModule,
    ColorModule,
    ProductColorModule,
    ProductImageModule,
    CapacityModule,
    ProductCapacityModule,
    ProductStockModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
