import { Module } from '@nestjs/common';
import { ActiveService } from './active.service';
import { ActiveController } from './active.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Active } from './entities/active.entity';

@Module({
  imports: [SequelizeModule.forFeature([Active])],
  controllers: [ActiveController],
  providers: [ActiveService],
  exports: [ActiveService, SequelizeModule],
})
export class ActiveModule {}
