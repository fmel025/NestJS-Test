import { IsString, MinLength } from 'class-validator';

export class CreateCarDto {
  @IsString()
  public readonly brand: string;

  @IsString()
  @MinLength(3)
  public readonly model: string;
}
