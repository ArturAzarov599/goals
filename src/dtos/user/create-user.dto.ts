import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, IsNumber, IsDateString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ type: String })
  @IsEmail()
  email: string;

  @ApiProperty({ type: String })
  @IsString()
  first_name: string;

  @ApiProperty({ type: String })
  @IsString()
  last_name: string;

  @ApiProperty({ type: Number })
  @IsNumber()
  age: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  phone: number;

  @ApiProperty({ type: String })
  @IsString()
  country: string;

  @ApiProperty({ type: String })
  @IsDateString()
  birth_day: string;
}
