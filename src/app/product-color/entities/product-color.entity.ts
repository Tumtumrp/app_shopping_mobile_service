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
import { Color } from 'src/app/color/entities/color.entity';
import { Product } from 'src/app/product/entities/product.entity';

@Table({ tableName: 'product_colors', timestamps: true })
export class ProductColor extends Model {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column({ type: DataType.INTEGER({ length: 10 }), field: 'product_color_id' })
  productColorId: number;

  @ForeignKey(() => Product)
  @AllowNull(false)
  @Column({ type: DataType.INTEGER({ length: 10 }), field: 'product_id' })
  productId: number;

  @ForeignKey(() => Color)
  @AllowNull(false)
  @Column({ type: DataType.INTEGER({ length: 10 }), field: 'color_id' })
  colorId: number;
}
