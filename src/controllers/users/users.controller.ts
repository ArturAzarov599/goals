import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';

import { AuthGuard } from 'src/guards/auth.guard';
import { UserService } from 'src/services/user/user.service';

import { UserDto } from 'src/dtos/user/user.dto';
import { CreateUserDto } from 'src/dtos/user/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/:email')
  findUser(@Param('email') email: string): Promise<UserDto> {
    try {
      return this.userService.findUser(email);
    } catch (error) {
      throw error;
    }
  }

  @Post()
  createUser(@Body() dto: CreateUserDto): Promise<UserDto> {
    try {
      return this.userService.createUser(dto);
    } catch (error) {
      throw error;
    }
  }

  @Put()
  @UseGuards(AuthGuard)
  updateUser(@Body() body: Partial<UserDto>) {
    try {
      return this.userService.updateUser(body);
    } catch (error) {
      throw error;
    }
  }
}
