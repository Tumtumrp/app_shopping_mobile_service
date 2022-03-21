import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  ForeignKey,
  HasOne,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
import { Basket } from 'src/app/basket/entities/basket.entity';
import { ProductBrand } from 'src/app/product-brand/entities/product-brand.entity';

@Table({ tableName: 'products', timestamps: true })
export class Product extends Model {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column({ type: DataType.INTEGER({ length: 10 }), field: 'product_id' })
  productId: number;

  @ForeignKey(() => ProductBrand)
  @AllowNull(false)
  @Column({ type: DataType.INTEGER({ length: 10 }), field: 'product_brand_id' })
  productBrandId: number;

  @Unique
  @AllowNull(false)
  @Column({ type: DataType.STRING(150), field: 'product_name' })
  productName: string;

  @HasOne(() => Basket)
  basket: Basket;
}
