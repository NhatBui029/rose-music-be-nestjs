import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ConfigUploadDto } from './cloudinary.dto';

@Controller('cloudinary')
export class CloudinaryController {
  constructor(
    @Inject('Cloudinary') private readonly cloudinary,
    private configService: ConfigService,
  ) {}

  @Post('url-upload')
  async createUrlUpload(
    @Body() configUpload: ConfigUploadDto,
  ): Promise<string> {
    const { folder, eager } = configUpload;
    const apiSecretKey = this.configService.get<string>(
      'CLOUDINARY_API_SECRET_KEY',
    );
    const apiKey = this.configService.get<string>('CLOUDINARY_API_KEY');
    const cloudName = this.configService.get<string>('CLOUDINARY_CLOUD_NAME');
    const timestamp = Math.round(new Date().getTime() / 1000);

    const signature = this.cloudinary.utils.api_sign_request(
      {
        folder,
        timestamp,
        eager,
      },
      apiSecretKey,
    );

    const url = `/${cloudName}/image/upload?api_key=${apiKey}&timestamp=${timestamp}&folder=${folder}&signature=${signature}&eager=${eager}`;
    return url;
  }
}
