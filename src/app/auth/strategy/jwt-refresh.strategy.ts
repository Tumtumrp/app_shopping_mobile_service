import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ReadFileService } from 'src/utils/read-file/read-file.service';
import { AuthDto } from '../dto/auth.dto';
import { JwtRefreshPayloadDto } from '../dto/jwt-refresh-payload.dto';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor(readonly readFileService: ReadFileService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: readFileService.readFileKey(
        '\\src\\assets\\key\\refresh.key.pub',
      ),
      algorithms: ['RS256'],
      passReqToCallback: true,
    });
  }

  public validate(request: Request, payload: AuthDto): JwtRefreshPayloadDto {
    const refreshToken: string = request
      ?.get('authorization')
      ?.replace('Bearer', '')
      .trim();

    const user: JwtRefreshPayloadDto = new JwtRefreshPayloadDto({
      refreshToken,
      payload,
    });

    return user;
  }
}
