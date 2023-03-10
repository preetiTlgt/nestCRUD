import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  MaxLength,
  IsOptional,
  IsEnum
} from 'class-validator';
export class CreateTaskDto {
  
  @ApiProperty()
  @IsString()
  @MaxLength(100)
  title: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  description: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  status: string;
}