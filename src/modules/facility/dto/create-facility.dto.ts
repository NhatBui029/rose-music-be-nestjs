import { IsNotEmpty } from 'class-validator';

export class CreateFacilityDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  imageUrl: string;
}
