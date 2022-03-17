import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BcryptService {
  public async hash(password: string): Promise<string> {
    try {
      const saltRound = 12;
      const salt: string = await bcrypt.genSalt(saltRound);
      return await bcrypt.hash(password, salt);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  public async compare(pass: string, hash: string): Promise<boolean> {
    try {
      return await bcrypt.compare(pass, hash);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
