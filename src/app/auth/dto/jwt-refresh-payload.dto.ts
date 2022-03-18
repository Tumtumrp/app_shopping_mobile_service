import { AuthDto } from './auth.dto';

export class JwtRefreshPayloadDto {
  refreshToken: string;
  payload: AuthDto;

  constructor(partial: Partial<JwtRefreshPayloadDto>) {
    Object.assign(this, partial);
  }
}
