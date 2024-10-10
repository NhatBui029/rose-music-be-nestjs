import {
  Controller,
  Post,
  Body,
  Get,
  InternalServerErrorException,
  Param,
} from '@nestjs/common';
import { FacilityService } from './facility.service';
import { CreateFacilityDto } from './dto/create-facility.dto';
import { Response } from 'express';
import { CreateRoomDto } from './dto/create-room.dto';
import { RoomService } from './room.service';

@Controller('facility')
export class FacilityController {
  constructor(
    private readonly facilityService: FacilityService,
    private readonly roomService: RoomService,
  ) {}

  @Post()
  async create(
    @Body() createFacilityDto: CreateFacilityDto,
    // @Res() res: Response,
  ) {
    try {
      return await this.facilityService.create(createFacilityDto);
      // return res.status(HttpStatus.BAD_REQUEST).json({
      //   statusCode: HttpStatus.BAD_REQUEST,
      //   message: 'Invalid data',
      //   nhatdz: 'hello',
      // });
    } catch (error) {
      console.log('🚀 ~ FacilityController ~ create ~ error:', error);
      throw new InternalServerErrorException();
    }
  }
  @Get()
  async get(): Promise<Object> {
    try {
      const facilities = await this.facilityService.getFacilities();
      return {
        data: facilities,
      };
    } catch (error) {
      console.log('🚀 ~ FacilityController ~ create ~ error:', error);
      throw new InternalServerErrorException();
    }
  }

  @Get(':id')
  async getDetail(@Param('id') id: string): Promise<Object> {
    try {
      const facilitiy = await this.facilityService.getFacilitieDetail(
        Number(id),
      );

      return facilitiy;
    } catch (error) {
      console.log('🚀 ~ FacilityController ~ create ~ error:', error);
      throw new InternalServerErrorException();
    }
  }

  @Post(':id/room')
  async createRoom(
    @Body() createRoomDto: CreateRoomDto,
    @Param('id') facilityId: number,
  ) {
    console.log('🚀 ~ FacilityController ~ createRoomDto:', createRoomDto);
    try {
      return await this.roomService.create(Number(facilityId), createRoomDto);
    } catch (error) {
      console.log('🚀 ~ FacilityController ~ create ~ error:', error);
      throw new InternalServerErrorException();
    }
  }
}
