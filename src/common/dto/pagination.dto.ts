import { IsOptional, IsPositive } from 'class-validator';

export class PaginationDto {
  @IsPositive()
  @IsOptional()
  limit: number;

  @IsPositive()
  @IsOptional()
  offset: number;
}
