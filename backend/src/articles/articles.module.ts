import { Module } from '@nestjs/common';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleSchema } from 'src/mongodb/article.schema';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';

@Module({
  imports:[
    MongooseModule.forFeature([{name : "Article" , schema : ArticleSchema}])
    , CloudinaryModule
  ],
  controllers: [ArticlesController],
  providers: [ArticlesService ]
})
export class ArticlesModule {}
