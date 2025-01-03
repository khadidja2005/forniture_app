import { Module } from '@nestjs/common';
import { CloudinaryController } from './cloudinary.controller';
import { CloudinaryService } from './cloudinary.service';
import { CloudinaryProvider } from './cloudinary.config';

@Module({
  controllers: [CloudinaryController],
  providers: [CloudinaryService , CloudinaryProvider],
  exports : [CloudinaryProvider , CloudinaryService]
})
export class CloudinaryModule {}
