import { ConfigService } from '@nestjs/config';
import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { AccountType } from 'src/app/account-type/entities/account-type.entity';
import { Account } from 'src/app/account/entities/account.entity';
import { Active } from 'src/app/active/entities/active.entity';
import { Address } from 'src/app/address/entities/address.entity';
import { Basket } from 'src/app/basket/entities/basket.entity';
import { RefreshToken } from 'src/app/refresh-token/entities/refresh-token.entity';

export class DatabaseConfig {
  public static async getSequelizeOptions(
    configService: ConfigService,
  ): Promise<SequelizeModuleOptions> {
    return new Promise((resolve) => {
      return resolve({
        dialect: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        models: [Active, AccountType, Account, RefreshToken, Address, Basket],
        autoLoadModels: true,
        synchronize: true,
      });
    });
  }
}
