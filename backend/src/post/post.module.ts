import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PostScema } from 'src/mongodb/post.schema';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{name : "Post" , schema : PostScema}]
    )
  ],
  providers: [PostService],
  controllers: [PostController]
})
export class PostModule {}
