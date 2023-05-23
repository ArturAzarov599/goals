import { AuthDto } from 'src/dtos/auth/auth.dto';

export interface IAuthService {
  signIn(dto: AuthDto): Promise<string>;
  signUp(dto: AuthDto): Promise<AuthDto>;
  deleteCredentials(email: string): Promise<boolean>;
}
