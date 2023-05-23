import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDateString, IsEmail } from 'class-validator';

export class CreateGoalDto {
  @ApiProperty({ type: String })
  @IsString()
  title: string;

  @ApiProperty({ type: String })
  @IsString()
  description: string;

  @ApiProperty({ type: String })
  @IsDateString()
  start_date: string;

  @ApiProperty({ type: String })
  @IsDateString()
  end_date: string;

  @ApiProperty({ type: String })
  @IsEmail()
  email: string;
}
