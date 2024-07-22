import { Injectable, Logger } from '@nestjs/common';
import { v2 as cloudinary, UploadApiResponse, UploadApiErrorResponse } from 'cloudinary';
import { APIKEY, APISECRET, CLOUDNAME } from 'src/config/keys';

@Injectable()
export class CloudinaryService {
  private readonly logger = new Logger(CloudinaryService.name);

  constructor() {
    cloudinary.config({
      cloud_name: CLOUDNAME,
      api_key: APIKEY,
      api_secret: APISECRET,
    });
  }

  async uploadImage(file: Express.Multer.File): Promise<UploadApiResponse | UploadApiErrorResponse> {
    this.logger.log('Uploading image to Cloudinary...');
    return new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream((error, result) => {
        if (error) {
          this.logger.error('Error uploading image to Cloudinary', error);
          return reject(error);
        }
        this.logger.log('Image uploaded successfully to Cloudinary', result);
        resolve(result);
      }).end(file.buffer);
    });
  }
}
