import {
  BadRequestException,
  HttpStatus,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { AuthDto } from 'src/dtos/auth/auth.dto';
import { IAuthService } from 'src/interfaces/services/auth.service.interface';
import { AuthRepository } from 'src/repositories/auth.repository';
import { UserRepository } from 'src/repositories/user.repository';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async signIn({ email, password }: AuthDto): Promise<string> {
    try {
      const userCredentials = await this.authRepository.findCredentials(email);

      if (!userCredentials) throw new NotFoundException(`User does not exist`);

      const isMatch = await bcrypt.compare(password, userCredentials.password);

      if (!isMatch) throw new UnauthorizedException();

      const { first_name, last_name } = await this.userRepository.findUser(
        email,
      );

      const payload = {
        email,
        username: first_name + ' ' + last_name,
      };

      return this.jwtService.signAsync(payload);
    } catch (error) {
      throw error;
    }
  }

  async signUp({ email, password }: AuthDto): Promise<AuthDto> {
    try {
      const userCredentials = await this.authRepository.findCredentials(email);

      if (userCredentials) throw new BadRequestException(`User already exist`);

      const hash = await bcrypt.hash(password, 16);

      return this.authRepository.signUp({ email, password: hash });
    } catch (error) {
      throw error;
    }
  }

  deleteCredentials(email: string): Promise<boolean> {
    try {
      return this.authRepository.deleteCredentials(email);
    } catch (error) {
      throw error;
    }
  }
}
