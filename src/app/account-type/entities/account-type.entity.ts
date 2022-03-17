import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  Default,
  ForeignKey,
  HasMany,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
import { Account } from 'src/app/account/entities/account.entity';
import { Active } from '../../active/entities/active.entity';

@Table({ tableName: 'account_types', timestamps: true })
export class AccountType extends Model {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column({ type: DataType.INTEGER({ length: 10 }), field: 'account_type_id' })
  accountTypeId: number;

  @ForeignKey(() => Active)
  @AllowNull(false)
  @Default(1)
  @Column({ type: DataType.INTEGER({ length: 10 }), field: 'active_id' })
  activeId: number;

  @Unique
  @AllowNull(false)
  @Column({ type: DataType.STRING(50), field: 'account_type_name' })
  accountTypeName: string;

  @HasMany(() => Account)
  accounts: Account[];
}
