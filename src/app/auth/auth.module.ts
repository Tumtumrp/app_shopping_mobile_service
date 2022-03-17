import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Account } from '../account/entities/account.entity';
import { PassportModule } from '@nestjs/passport';
import { BasicStrategy } from './strategy/basic.strategy';
import { BcryptModule } from 'src/utils/bcrypt/bcrypt.module';
import { RefreshToken } from '../refresh-token/entities/refresh-token.entity';
import { ValidationModule } from 'src/utils/validation/validation.module';
import { JwtModule } from '@nestjs/jwt';
import { ReadFileModule } from 'src/utils/read-file/read-file.module';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
  imports: [
    PassportModule,
    SequelizeModule.forFeature([Account]),
    SequelizeModule.forFeature([RefreshToken]),
    JwtModule.register({}),
    BcryptModule,
    ValidationModule,
    ReadFileModule,
  ],
  providers: [AuthService, BasicStrategy, JwtStrategy],
  controllers: [AuthController],
  exports: [SequelizeModule],
})
export class AuthModule {}
