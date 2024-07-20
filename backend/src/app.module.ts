import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DB_URI } from './config/keys';
import { UserSchema } from './mongodb/user.schema';
import { PostScema } from './mongodb/post.schema';
import { ArticleSchema } from './mongodb/article.schema';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    MongooseModule.forRoot(DB_URI ),
        MongooseModule.forFeature(
          [{name : "User" , schema : UserSchema}]
        ),
        MongooseModule.forFeature(
          [{name : "Post" , schema : PostScema}]
        ),
        MongooseModule.forFeature(
          [{name: "Article" , schema : ArticleSchema}]
        ),
        AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
