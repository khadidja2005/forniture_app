import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PostScema } from 'src/mongodb/post.schema';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';
import { Review } from 'src/mongodb/review.shema';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{name : "Post" , schema : PostScema}]
    ) ,
    MongooseModule.forFeature(
      [{name : "Review" , schema :Review }]
    ) , CloudinaryModule
  ],
  providers: [PostService],
  controllers: [PostController]
})
export class PostModule {}
