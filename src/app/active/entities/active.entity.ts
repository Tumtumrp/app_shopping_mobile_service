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
import { AccountType } from 'src/app/account-type/entities/account-type.entity';

@Table({ tableName: 'active', timestamps: true })
export class Active extends Model {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column({ type: DataType.INTEGER({ length: 10 }), field: 'active_id' })
  activeId: number;

  @Unique
  @AllowNull(false)
  @Column({ type: DataType.STRING(50), field: 'active_name' })
  activeName: string;

  @HasOne(() => AccountType)
  accountType: AccountType;
}
