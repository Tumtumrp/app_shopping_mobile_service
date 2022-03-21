import { Module } from '@nestjs/common';
import { CapacityService } from './capacity.service';
import { CapacityController } from './capacity.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Capacity } from './entities/capacity.entity';

@Module({
  imports: [SequelizeModule.forFeature([Capacity])],
  controllers: [CapacityController],
  providers: [CapacityService],
  exports: [CapacityService, SequelizeModule],
})
export class CapacityModule {}
