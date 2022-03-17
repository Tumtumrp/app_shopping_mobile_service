import {
  BadRequestException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { BcryptService } from 'src/utils/bcrypt/bcrypt.service';
import { ReadFileService } from 'src/utils/read-file/read-file.service';
import { ValidationService } from 'src/utils/validation/validation.service';
import { AccountType } from '../account-type/entities/account-type.entity';
import { Account } from '../account/entities/account.entity';
import { RefreshToken } from '../refresh-token/entities/refresh-token.entity';
import { AuthDto } from './dto/auth.dto';
import { LogoutResponseDto } from './dto/logout-response.dto';
import { NewAccountRequestDto } from './dto/new-account-request.dto';
import { NewAccountResponseDto } from './dto/new-account-response.dto';
import { TokensDto } from './dto/tokens.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Account) private accountModel: typeof Account,
    @InjectModel(RefreshToken) private refreshTokenModel: typeof RefreshToken,
    private readonly jwtService: JwtService,
    private readonly bcryptService: BcryptService,
    private readonly validateService: ValidationService,
    private readonly readFileService: ReadFileService,
  ) {}

  private async findByUsernameJoinAccountType(
    username: string,
  ): Promise<Account> {
    try {
      return await this.accountModel.findOne({
        where: { username },
        include: { model: AccountType },
      });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  private async findByUsernameOrEmail(
    username: string,
    email: string,
  ): Promise<Account> {
    try {
      return await this.accountModel.findOne({
        where: { [Op.or]: [{ username }, { email }] },
      });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  private async updateRefreshTokenByAccountId(
    accountId: number,
    refreshToken: string,
  ): Promise<void> {
    try {
      const refreshTokenHash = await this.bcryptService.hash(refreshToken);

      await this.refreshTokenModel.update(
        { refreshTokenHash },
        { where: { account_id: accountId } },
      );
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  public async validateUser(
    username: string,
    password: string,
  ): Promise<AuthDto> {
    try {
      const account: Account = await this.findByUsernameJoinAccountType(
        username,
      );
      if (!account) return null;

      const isMatch: boolean = await this.bcryptService.compare(
        password,
        account.password,
      );
      if (!isMatch) return null;

      const response: AuthDto = new AuthDto({
        _id: account.accountId,
        username: account.username,
        role: account.accountType.accountTypeName,
      });

      return response;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  public async login(user: AuthDto): Promise<TokensDto> {
    try {
      const tokens: TokensDto = await this.getTokens(user);
      await this.updateRefreshTokenByAccountId(user._id, tokens.refreshToken);

      return tokens;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  public async logout(accountId: number): Promise<LogoutResponseDto> {
    try {
      await this.updateRefreshTokenByAccountId(accountId, null);

      const response: LogoutResponseDto = new LogoutResponseDto({
        status: true,
      });
      return response;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  public async createNewAccount(
    request: NewAccountRequestDto,
  ): Promise<NewAccountResponseDto> {
    const checkAccount: Account = await this.findByUsernameOrEmail(
      request.password,
      request.email,
    );
    if (checkAccount)
      throw new BadRequestException('Username or email already has a user');

    const isPassword: boolean = this.validateService.validatePassword(
      request.password,
    );
    if (!isPassword)
      throw new BadRequestException(
        `Password must have at least one Uppercase character, least one lowercase character, least one digit, least one special symbol [~\`!@#$%^&*-+=?_] and be 8-16 characters long.`,
      );

    const hashPassword: string = await this.bcryptService.hash(
      request.password,
    );

    const newAccount: Account = await this.accountModel.create({
      username: request.username,
      email: request.email,
      password: hashPassword,
    });
    if (!newAccount) throw new InternalServerErrorException();

    const newRefreshToken: RefreshToken = await this.refreshTokenModel.create({
      accountId: newAccount.accountId,
    });

    if (!newRefreshToken) throw new InternalServerErrorException();

    const response: NewAccountResponseDto = new NewAccountResponseDto({
      statusCode: HttpStatus.CREATED,
      message: 'create new account successfully',
    });

    return response;
  }

  private async getTokens(data: AuthDto): Promise<TokensDto> {
    try {
      const [accessToken, refreshToken] = await Promise.all([
        this.jwtService.signAsync(
          { _id: data._id, username: data.username, role: data.role },
          {
            privateKey: this.readFileService.readFileKey(
              '\\src\\assets\\key\\auth.key',
            ),
            algorithm: 'RS256',
            expiresIn: '15m',
          },
        ),
        this.jwtService.signAsync(
          { _id: data._id, username: data.username, role: data.role },
          {
            privateKey: this.readFileService.readFileKey(
              '\\src\\assets\\key\\refresh.key',
            ),
            algorithm: 'RS256',
            expiresIn: '7d',
          },
        ),
      ]);

      const response: TokensDto = new TokensDto({ accessToken, refreshToken });

      return response;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
