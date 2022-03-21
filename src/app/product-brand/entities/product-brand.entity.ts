import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  HasOne,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
import { Product } from 'src/app/product/entities/product.entity';

@Table({ tableName: 'product-brands', timestamps: true })
export class ProductBrand extends Model {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column({ type: DataType.INTEGER({ length: 10 }), field: 'product_brand_id' })
  productBrandId: number;

  @Unique
  @AllowNull(false)
  @Column({
    type: DataType.STRING({ length: 150 }),
    field: 'product_brand_name',
  })
  productBrandName: string;

  @HasOne(() => Product)
  product: Product;
}
