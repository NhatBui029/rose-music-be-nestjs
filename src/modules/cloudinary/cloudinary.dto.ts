import { IsNotEmpty } from 'class-validator';

export class ConfigUploadDto {
  @IsNotEmpty()
  folder: string;

  @IsNotEmpty()
  eager: string;
}
