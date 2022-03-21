import {
  AllowNull,
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  HasMany,
  HasOne,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
import { AccountType } from 'src/app/account-type/entities/account-type.entity';
import { Active } from 'src/app/active/entities/active.entity';
import { Address } from 'src/app/address/entities/address.entity';
import { Basket } from 'src/app/basket/entities/basket.entity';
import { RefreshToken } from 'src/app/refresh-token/entities/refresh-token.entity';

@Table({ tableName: 'accounts', timestamps: true })
export class Account extends Model {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column({ type: DataType.INTEGER({ length: 10 }), field: 'account_id' })
  accountId: number;

  @ForeignKey(() => AccountType)
  @AllowNull(false)
  @Default(2)
  @Column({ type: DataType.INTEGER({ length: 10 }), field: 'account_type_id' })
  accountTypeId: number;

  @BelongsTo(() => AccountType)
  accountType: AccountType;

  @ForeignKey(() => Active)
  @AllowNull(false)
  @Default(1)
  @Column({ type: DataType.INTEGER({ length: 10 }), field: 'active_id' })
  activeId: number;

  @Unique
  @AllowNull(false)
  @Column({ type: DataType.STRING(100), field: 'username' })
  username: string;

  @Unique
  @AllowNull(false)
  @Column({ type: DataType.STRING(200), field: 'email' })
  email: string;

  @AllowNull(false)
  @Column({ type: DataType.TEXT, field: 'password' })
  password: string;

  @HasOne(() => RefreshToken)
  refreshToken: RefreshToken;

  @HasMany(() => Address)
  addresses: Address[];

  @HasMany(() => Basket)
  baskets: Basket[];
}
