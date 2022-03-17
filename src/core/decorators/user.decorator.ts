import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { AuthDto } from 'src/app/auth/dto/auth.dto';

export const User = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request: Request = ctx.switchToHttp().getRequest<Request>();
    const user: AuthDto = request.user as AuthDto;

    return data ? user?.[data] : user;
  },
);
