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
import { DefaultSand } from 'src/core/enum/default-sand.enum';

@Table({ tableName: 'addresses', timestamps: true })
export class Address extends Model {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column({ type: DataType.INTEGER({ length: 10 }), field: 'address_id' })
  addressId: number;

  @ForeignKey(() => Account)
  @AllowNull(false)
  @Column({ type: DataType.INTEGER({ length: 10 }), field: 'account_id' })
  accountId: number;

  @AllowNull(false)
  @Column({ type: DataType.STRING(200), field: 'full_name' })
  fullName: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING(10), field: 'phone_number' })
  phoneNumber: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING({ length: 150 }), field: 'province' })
  province: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING({ length: 100 }), field: 'district' })
  district: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING(5), field: 'zip_code' })
  ZipCode: string;

  @AllowNull(false)
  @Column({ type: DataType.TEXT, field: 'line' })
  line: string;

  @AllowNull(false)
  @Default(DefaultSand.HOME)
  @Column({ type: DataType.ENUM('WORKPLACE', 'HOME'), field: 'default_sand' })
  defaultSand: DefaultSand;
}
