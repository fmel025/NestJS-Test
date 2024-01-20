import { IsOptional, IsString, IsUUID, MinLength } from 'class-validator';

export class UpdateCarDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  public readonly id?: string;

  @IsOptional()
  @IsString()
  public readonly brand?: string;

  @IsOptional()
  @IsString()
  @MinLength(3)
  public readonly model?: string;
}
