import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { resolve } from 'path';

@Injectable()
export class ReadFileService {
  public readFileKey(pathKey: string): string {
    const path: string = resolve('./') + pathKey;
    return readFileSync(path, 'ascii');
  }
}
