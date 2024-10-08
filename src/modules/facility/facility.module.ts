import { Module } from '@nestjs/common';
import { FacilityService } from './facility.service';
import { FacilityController } from './facility.controller';
import { PrismaService } from 'src/common/services/prisma.service';

@Module({
  controllers: [FacilityController],
  providers: [FacilityService, PrismaService],
})
export class FacilityModule {}
