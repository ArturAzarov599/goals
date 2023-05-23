import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEmail, IsNumber } from 'class-validator';

export class EmailGoalIdDto {
  @ApiProperty({ type: String })
  @IsEmail()
  email: string;

  @ApiProperty({ type: Number })
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  goalId: number;
}
