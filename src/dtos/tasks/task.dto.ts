import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsDateString,
  IsEnum,
  IsNumber,
  IsBoolean,
} from 'class-validator';
import { EPriority } from 'src/enums/priority.enum';

export class TaskDto {
  @ApiProperty({ type: Number })
  @IsNumber()
  id: number;

  @ApiProperty({ type: String })
  @IsString()
  title: string;

  @ApiProperty({ type: String })
  @IsString()
  note: string;

  @ApiProperty({ type: String })
  @IsDateString()
  start_date: string;

  @ApiProperty({ type: String })
  @IsDateString()
  end_date: string;

  @ApiProperty({ type: Boolean })
  @IsBoolean()
  is_completed: boolean;

  @ApiProperty({ enum: EPriority })
  @IsEnum(EPriority)
  priority: EPriority;

  @ApiProperty({ type: String })
  @IsDateString()
  create_date: string;
}
