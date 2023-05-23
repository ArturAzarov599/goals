import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsDateString,
  IsEnum,
  IsOptional,
  IsNumber,
  IsEmail,
} from 'class-validator';
import { EPriority } from 'src/enums/priority.enum';

export class CreateTaskDto {
  @ApiProperty({ type: String })
  @IsString()
  title: string;

  @ApiProperty({ type: String })
  @IsString()
  note: string;

  @ApiProperty({ type: String })
  @IsDateString()
  @IsOptional()
  start_date: string;

  @ApiProperty({ type: String })
  @IsDateString()
  end_date: string;

  @ApiProperty({ enum: EPriority })
  @IsEnum(EPriority)
  priority: EPriority;

  @ApiProperty({ type: Number })
  @IsNumber()
  goalId: number;

  @ApiProperty({ type: String })
  @IsEmail()
  email: string;
}
