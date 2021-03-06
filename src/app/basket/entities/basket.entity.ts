import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  Default,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Account } from 'src/app/account/entities/account.entity';
import { Product } from 'src/app/product/entities/product.entity';

@Table({ tableName: 'baskets', timestamps: true })
export class Basket extends Model {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column({ type: DataType.INTEGER({ length: 10 }), field: 'basket_id' })
  basketId: number;

  @ForeignKey(() => Account)
  @AllowNull(false)
  @Column({ type: DataType.INTEGER({ length: 10 }), field: 'account_id' })
  accountId: number;

  @ForeignKey(() => Product)
  @AllowNull(false)
  @Column({ type: DataType.INTEGER({ length: 10 }), field: 'product_id' })
  productId: number;

  @AllowNull(false)
  @Default(1)
  @Column({ type: DataType.INTEGER({ length: 10 }), field: 'quantity' })
  quantity: number;
}
