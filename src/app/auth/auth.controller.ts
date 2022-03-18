import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBasicAuth,
  ApiBearerAuth,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { User } from 'src/core/decorators/user.decorator';
import { BasicAuthGuard } from 'src/core/guards/basic-auth.guard';
import { JwtAuthGuard } from 'src/core/guards/jwt-auth.guard';
import { JwtRefreshAuthGuard } from 'src/core/guards/jwt-refresh-auth.guard';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { JwtRefreshPayloadDto } from './dto/jwt-refresh-payload.dto';
import { LogoutResponseDto } from './dto/logout-response.dto';
import { NewAccountRequestDto } from './dto/new-account-request.dto';
import { NewAccountResponseDto } from './dto/new-account-response.dto';
import { TokensDto } from './dto/tokens.dto';

@ApiTags('AuthController')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiBasicAuth()
  @ApiOkResponse({
    description: 'login successfully',
    type: TokensDto,
  })
  @UseGuards(BasicAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Get('login')
  public async login(@User() user: AuthDto): Promise<TokensDto> {
    return await this.authService.login(user);
  }

  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'refresh token account successfully',
    type: TokensDto,
  })
  @UseGuards(JwtRefreshAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Get('refresh-token')
  public async refreshToken(
    @User() user: JwtRefreshPayloadDto,
  ): Promise<TokensDto> {
    return await this.authService.refreshToken(
      user.payload._id,
      user.refreshToken,
    );
  }

  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'logout successfully',
    type: LogoutResponseDto,
  })
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Get('logout')
  public async logout(
    @User('_id') accountId: number,
  ): Promise<LogoutResponseDto> {
    return await this.authService.logout(accountId);
  }

  @ApiOkResponse({
    description: 'create new account successfully',
    type: NewAccountResponseDto,
  })
  @HttpCode(HttpStatus.CREATED)
  @Post('new-account')
  public async createNewAccount(
    @Body() request: NewAccountRequestDto,
  ): Promise<NewAccountResponseDto> {
    return await this.authService.createNewAccount(request);
  }
}
