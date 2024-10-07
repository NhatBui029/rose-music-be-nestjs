import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller('cloudinary')
export class CloudinaryController {
  constructor(
    @Inject('Cloudinary') private readonly cloudinary,
    private configService: ConfigService,
  ) {}

  @Post('url-upload')
  async createUrlUpload(
    @Body('folderName') folderName: string,
  ): Promise<Object> {
    const timestamp = Math.round(new Date().getTime() / 1000);
    const signature = this.cloudinary.utils.api_sign_request(
      { timestamp, folderName },
      this.configService.get<string>('CLOUDINARY_API_SECRET_KEY'),
    );
    return { signature, timestamp, folderName };
  }
}
