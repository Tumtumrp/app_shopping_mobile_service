import { Injectable } from '@nestjs/common';

@Injectable()
export class ValidationService {
  public validatePassword(password: string): boolean {
    const check =
      /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*--+=?\_]).{8,16}$/;
    return check.test(password);
  }
}
