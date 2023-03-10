import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  MaxLength,
  IsOptional
} from 'class-validator';
export class UpdateTaskDto {
  
  @ApiProperty()
  @IsString()
  @MaxLength(24)
  _id: string;
  
  @ApiProperty()
  @IsOptional()
  @IsString()
  @MaxLength(100)
  title: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  description: string;
}