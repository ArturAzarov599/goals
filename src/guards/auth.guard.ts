import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { extractTokenFromHeader } from 'src/utils/extractTokenFromHeader';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = extractTokenFromHeader(request);

    if (!token) throw new UnauthorizedException();

    try {
      const jwtSecret = this.configService.get<string>('JWT_SECRET');
      await this.jwtService.verifyAsync(token, {
        secret: jwtSecret,
      });
    } catch (error) {
      throw new UnauthorizedException();
    }

    return true;
  }
}
