import { Controller, Post, UploadedFile, UseInterceptors, Logger } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from './cloudinary.service';
import * as multer from 'multer';

// Configure multer storage options if needed
const multerOptions = {
  storage: multer.memoryStorage(), // In-memory storage
  limits: { fileSize: 5 * 1024 * 1024 }, // Max file size (5 MB)
};

@Controller('cloudinary')
export class CloudinaryController {
  private readonly logger = new Logger(CloudinaryController.name);

  constructor(private readonly uploadService: CloudinaryService) {}

  @Post('image')
  @UseInterceptors(FileInterceptor('file', multerOptions))
  async uploadImage(@UploadedFile() file: Express.Multer.File) {
    this.logger.log('Received file upload request');
    if (!file) {
      this.logger.error('No file provided');
      throw new Error('No file provided');
    }

    try {
      const result = await this.uploadService.uploadImage(file);
      this.logger.log('File uploaded successfully', result);
      return { url: result.url };
    } catch (error) {
      this.logger.error('Error uploading file', error);
      throw new Error('Internal server error');
    }
  }
}
