import { Module } from '@nestjs/common';
import { ReadFileService } from './read-file.service';

@Module({
  providers: [ReadFileService],
  exports: [ReadFileService],
})
export class ReadFileModule {}
