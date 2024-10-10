import { IsNotEmpty } from 'class-validator';

export class CreateRoomDto {
  @IsNotEmpty()
  name: string;

  note: string;

  @IsNotEmpty()
  imageUrl: string;
}
