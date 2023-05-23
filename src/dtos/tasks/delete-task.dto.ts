import { IsNumber, IsEmail } from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class DeleteTaskDto {
  @ApiProperty({ type: Number })
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  id: number;

  @ApiProperty({ type: Number })
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  goalId: number;

  @ApiProperty({ type: String })
  @IsEmail()
  email: string;
}
