import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configuration } from './config/env/configuration';
import { DatabaseModule } from './config/database/database.module';
import { AccountTypeModule } from './app/account-type/account-type.module';
import { AccountModule } from './app/account/account.module';
import { ActiveModule } from './app/active/active.module';
import { RefreshTokenModule } from './app/refresh-token/refresh-token.module';
import { AuthModule } from './app/auth/auth.module';
import { ReadFileModule } from './utils/read-file/read-file.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}\\src\\resource\\.${
        process.env.NODE_ENV
      }.env`,
      load: [configuration],
      isGlobal: true,
    }),
    DatabaseModule,
    AccountTypeModule,
    AccountModule,
    ActiveModule,
    RefreshTokenModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
