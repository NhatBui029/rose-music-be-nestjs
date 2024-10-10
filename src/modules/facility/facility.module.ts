import { Module } from '@nestjs/common';
import { FacilityService } from './facility.service';
import { FacilityController } from './facility.controller';
import { PrismaService } from 'src/common/services/prisma.service';
import { RoomService } from './room.service';

@Module({
  controllers: [FacilityController],
  providers: [FacilityService, PrismaService, RoomService],
})
export class FacilityModule {}
