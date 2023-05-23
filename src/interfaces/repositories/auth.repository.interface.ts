import { AuthDto } from 'src/dtos/auth/auth.dto';
import { AuthEntity } from 'src/entities/auth.entity';

export interface IAuthRepository {
  findCredentials(email: string): Promise<AuthEntity>;
  signUp(dto: AuthDto): Promise<AuthEntity>;
  deleteCredentials(email: string): Promise<boolean>;
}
