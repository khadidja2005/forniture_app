import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { Article } from 'src/mongodb/article.schema';

@Injectable()
export class ArticlesService {
    constructor(@InjectModel(Article.name) private articleModel : Model<Article>  , private readonly uploadService: CloudinaryService) {}

    async createArticle(title : string  , content : string , file : Express.Multer.File ):Promise<Article>{
        const photourl = await this.uploadService.uploadImage(file)  
        const newPost = new this.articleModel({title , content, photourl : photourl.url })
        return await newPost.save();
    }

    async getAllArticles():Promise<Article[]> {
        return await this.articleModel.find().exec();
    }
    
}
