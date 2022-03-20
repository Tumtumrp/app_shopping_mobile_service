import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { AuthDto } from 'src/app/auth/dto/auth.dto';
import { Role } from '../enum/role.enum';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requestRole = this.reflector.getAllAndOverride<Role[]>('roles', [
      context.getHandler(),
    ]);
    if (!requestRole) return true;

    const request: Request = context.switchToHttp().getRequest<Request>();
    const user = request.user as AuthDto;
    return requestRole.some((role) => user?.role?.includes(role));
  }
}
