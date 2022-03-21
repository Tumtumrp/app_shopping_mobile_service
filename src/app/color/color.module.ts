import { Module } from '@nestjs/common';
import { ColorService } from './color.service';
import { ColorController } from './color.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Color } from './entities/color.entity';

@Module({
  imports: [SequelizeModule.forFeature([Color])],
  controllers: [ColorController],
  providers: [ColorService],
  exports: [ColorService, SequelizeModule],
})
export class ColorModule {}
