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
import { ProductColor } from 'src/app/product-color/entities/product-color.entity';

@Table({ tableName: 'colors', timestamps: true })
export class Color extends Model {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column({ type: DataType.INTEGER({ length: 10 }), field: 'color_id' })
  colorId: number;

  @Unique
  @AllowNull(false)
  @Column({ type: DataType.STRING(150), field: 'color_name' })
  colorName: string;

  @HasOne(() => ProductColor)
  productColor: ProductColor;
}
