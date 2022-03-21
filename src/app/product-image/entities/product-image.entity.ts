import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Product } from 'src/app/product/entities/product.entity';

@Table({ tableName: 'product_images', timestamps: true })
export class ProductImage extends Model {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column({ type: DataType.INTEGER({ length: 10 }), field: 'product_image_id' })
  productImageId: number;

  @ForeignKey(() => Product)
  @AllowNull(false)
  @Column({ type: DataType.INTEGER({ length: 10 }), field: 'account_id' })
  accountId: number;

  @AllowNull(false)
  @Column({ type: DataType.TEXT, field: 'product_image_name' })
  productImageName: string;
}
