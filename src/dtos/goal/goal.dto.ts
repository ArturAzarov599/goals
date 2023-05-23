import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDateString, IsNumber } from 'class-validator';

export class GoalDto {
  @ApiProperty({ type: Number })
  @IsNumber()
  id: number;

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
  @IsDateString()
  create_date: string;
}
