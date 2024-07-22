import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from "cors"
import { cloudinaryConfig } from './config/cloudinary.config';

async function bootstrap() {

  cloudinaryConfig();
  const app = await NestFactory.create(AppModule);
  app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  }))
  await app.listen(5000);
}
bootstrap();
