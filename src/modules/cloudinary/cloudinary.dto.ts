import { IsNotEmpty } from 'class-validator';

export class CreateImageUrlUploadDto {
  @IsNotEmpty()
  folderName: string;
}
