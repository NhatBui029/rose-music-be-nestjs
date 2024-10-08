import { Controller, Post, Body } from '@nestjs/common';
import { FacilityService } from './facility.service';
import { CreateFacilityDto } from './dto/create-facility.dto';

@Controller('facility')
export class FacilityController {
  constructor(private readonly facilityService: FacilityService) {}

  @Post()
  create(@Body() createFacilityDto: CreateFacilityDto) {
    try {
      return this.facilityService.create(createFacilityDto);
    } catch (error) {
      console.log('🚀 ~ FacilityController ~ create ~ error:', error);
    }
  }
}
