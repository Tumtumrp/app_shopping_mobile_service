import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Capacity } from 'src/app/capacity/entities/capacity.entity';
import { ProductColor } from 'src/app/product-color/entities/product-color.entity';
import { ProductStock } from 'src/app/product-stock/entities/product-stock.entity';

@Table({ tableName: 'product_capacities', timestamps: true })
export class ProductCapacity extends Model {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER({ length: 10 }),
    field: 'product_capacity_id',
  })
  productCapacityId: number;

  @ForeignKey(() => Capacity)
  @AllowNull(false)
  @Column({ type: DataType.INTEGER({ length: 10 }), field: 'capacity_id' })
  capacityId: number;

  @ForeignKey(() => ProductColor)
  @AllowNull(false)
  @Column({ type: DataType.INTEGER({ length: 10 }), field: 'product_color_id' })
  productColorId: number;

  @HasMany(() => ProductStock)
  productStocks: ProductStock[];
}
