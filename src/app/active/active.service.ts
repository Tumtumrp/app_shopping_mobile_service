import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Active } from './entities/active.entity';

@Injectable()
export class ActiveService {
  constructor(@InjectModel(Active) private activeModel: typeof Active) {}
}
