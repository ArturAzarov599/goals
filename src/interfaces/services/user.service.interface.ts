import { CreateUserDto } from 'src/dtos/user/create-user.dto';
import { UserDto } from 'src/dtos/user/user.dto';

export interface IUserService {
  findUser(email: string): Promise<UserDto>;
  createUser(dto: CreateUserDto): Promise<UserDto>;
  updateUser(dto: Partial<CreateUserDto>): Promise<UserDto>;
}
