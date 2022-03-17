import { Module } from '@nestjs/common';
import { RefreshTokenService } from './refresh-token.service';
import { RefreshTokenController } from './refresh-token.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { RefreshToken } from './entities/refresh-token.entity';

@Module({
  imports: [SequelizeModule.forFeature([RefreshToken])],
  controllers: [RefreshTokenController],
  providers: [RefreshTokenService],
  exports: [RefreshTokenService, SequelizeModule],
})
export class RefreshTokenModule {}
