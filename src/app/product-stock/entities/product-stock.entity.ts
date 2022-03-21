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
import { ProductCapacity } from 'src/app/product-capacity/entities/product-capacity.entity';

@Table({ tableName: 'product_stocks', timestamps: true })
export class ProductStock extends Model {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column({ type: DataType.INTEGER({ length: 10 }), field: 'product_stock_id' })
  productStockId: number;

  @ForeignKey(() => ProductCapacity)
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER({ length: 10 }),
    field: 'product_capacity_id',
  })
  productCapacityId: number;

  @AllowNull(false)
  @Column({ type: DataType.INTEGER({ length: 10 }), field: 'quantity' })
  quantity: number;

  @AllowNull(false)
  @Column({ type: DataType.DECIMAL(10, 2), field: 'price' })
  price: number;
}
