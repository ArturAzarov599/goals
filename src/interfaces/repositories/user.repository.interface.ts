import { UserEntity } from 'src/entities/user.entity';
import { CreateUserDto } from 'src/dtos/user/create-user.dto';

export interface IUserRepository {
  findUser(email: string): Promise<UserEntity>;
  createUser(data: CreateUserDto): Promise<UserEntity>;
  updateUser(dto: Partial<CreateUserDto>): Promise<UserEntity>;
}
