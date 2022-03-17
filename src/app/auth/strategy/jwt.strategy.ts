import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ReadFileService } from 'src/utils/read-file/read-file.service';
import { AuthDto } from '../dto/auth.dto';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(readonly readFileService: ReadFileService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: readFileService.readFileKey(
        '\\src\\assets\\key\\auth.key.pub',
      ),
      algorithms: ['RS256'],
    });
  }

  public validate(payload: AuthDto): AuthDto {
    return payload;
  }
}
