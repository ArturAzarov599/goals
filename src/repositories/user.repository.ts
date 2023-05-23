import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { UserEntity } from 'src/entities/user.entity';
import { AuthEntity } from 'src/entities/auth.entity';
import { CreateUserDto } from 'src/dtos/user/create-user.dto';
import { IUserRepository } from 'src/interfaces/repositories/user.repository.interface';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  findUser(email: string): Promise<UserEntity> {
    try {
      return this.userRepository.findOne({ where: { email } });
    } catch (error) {
      throw error;
    }
  }

  createUser(dto: CreateUserDto): Promise<UserEntity> {
    try {
      const userRecord = {
        ...dto,
        create_date: new Date().toISOString(),
        credentials_id: dto.email as unknown as AuthEntity,
      };

      return this.userRepository.save(userRecord);
    } catch (error) {
      throw error;
    }
  }

  async updateUser(dto: Partial<CreateUserDto>): Promise<UserEntity> {
    try {
      return this.userRepository.save({
        email: dto.email,
        ...dto,
      });
    } catch (error) {
      throw error;
    }
  }
}
