import { Module } from '@nestjs/common';
import { CloudinaryController } from './cloudinary.controller';
import { CloudinaryService } from './cloudinary.service';
import { ConfigService } from '@nestjs/config';
import { v2 as cloudinary } from 'cloudinary';

@Module({
  providers: [
    CloudinaryService,
    {
      provide: 'Cloudinary',
      useFactory: (configService: ConfigService) => {
        cloudinary.config({
          cloud_name: configService.get('CLOUDINARY_CLOUD_NAME'),
          api_key: configService.get('CLOUDINARY_API_KEY'),
          api_secret: configService.get('CLOUDINARY_API_SECRET_KEY'),
        });
        return cloudinary;
      },
      inject: [ConfigService],
    },
  ],
  controllers: [CloudinaryController],
})
export class CloudinaryModule {}
