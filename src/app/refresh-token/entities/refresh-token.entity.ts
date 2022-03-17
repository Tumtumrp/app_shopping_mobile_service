import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
import { Account } from 'src/app/account/entities/account.entity';

@Table({ tableName: 'refresh-token', timestamps: true })
export class RefreshToken extends Model {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column({ type: DataType.INTEGER({ length: 10 }), field: 'refresh_token_id' })
  refreshTokenId: number;

  @ForeignKey(() => Account)
  @Unique
  @AllowNull(false)
  @Column({ type: DataType.INTEGER({ length: 10 }), field: 'account_id' })
  accountId: number;

  @AllowNull(true)
  @Column({ type: DataType.TEXT, field: 'refresh_token_hash' })
  refreshTokenHash: string;
}
