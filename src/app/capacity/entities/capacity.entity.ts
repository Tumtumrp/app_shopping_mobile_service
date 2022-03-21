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
import { ProductCapacity } from 'src/app/product-capacity/entities/product-capacity.entity';

@Table({ tableName: 'capacities', timestamps: true })
export class Capacity extends Model {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column({ type: DataType.INTEGER({ length: 10 }), field: 'capacity_id' })
  capacityId: number;

  @Unique
  @AllowNull(false)
  @Column({ type: DataType.STRING(50), field: 'capacity_name' })
  capacityName: string;

  @HasOne(() => ProductCapacity)
  productCapacity: ProductCapacity;
}
