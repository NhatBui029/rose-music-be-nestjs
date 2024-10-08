import { Injectable } from '@nestjs/common';
import { CreateFacilityDto } from './dto/create-facility.dto';
import { PrismaService } from 'src/common/services/prisma.service';
import { Facility } from '@prisma/client';

@Injectable()
export class FacilityService {
  constructor(private prisma: PrismaService) {}

  async create(createFacilityDto: CreateFacilityDto): Promise<Facility> {
    return await this.prisma.facility.create({
      data: createFacilityDto,
    });
  }
}
