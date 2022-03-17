import { Module } from '@nestjs/common';
import { AccountTypeService } from './account-type.service';
import { AccountTypeController } from './account-type.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { AccountType } from './entities/account-type.entity';

@Module({
  imports: [SequelizeModule.forFeature([AccountType])],
  controllers: [AccountTypeController],
  providers: [AccountTypeService],
  exports: [AccountTypeService, SequelizeModule],
})
export class AccountTypeModule {}
