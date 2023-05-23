import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/dtos/user/create-user.dto';
import { UserDto } from 'src/dtos/user/user.dto';
import { IUserService } from 'src/interfaces/services/user.service.interface';
import { UserRepository } from 'src/repositories/user.repository';

@Injectable()
export class UserService implements IUserService {
  constructor(private readonly userRepository: UserRepository) {}

  findUser(email: string): Promise<UserDto> {
    try {
      return this.userRepository.findUser(email);
    } catch (error) {
      throw error;
    }
  }

  createUser(dto: CreateUserDto): Promise<UserDto> {
    try {
      return this.userRepository.createUser(dto);
    } catch (error) {
      throw error;
    }
  }

  updateUser(dto: Partial<CreateUserDto>): Promise<UserDto> {
    try {
      return this.userRepository.updateUser(dto);
    } catch (error) {
      throw error;
    }
  }
}
