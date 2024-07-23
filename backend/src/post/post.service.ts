import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { Post } from 'src/mongodb/post.schema';

@Injectable()
export class PostService {

    constructor(@InjectModel(Post.name) private postModel : Model<Post> , private readonly uploadService: CloudinaryService) {}

    async createPost(name : string , description : string , price : number , category : string , file : Express.Multer.File , quantity : number):Promise<Post>{
        const photourl = await this.uploadService.uploadImage(file)  
        const newPost = new this.postModel({name , description , price , category , photourl : photourl.url , quantity})
        return await newPost.save();
    }
    async getAllPosts():Promise<Post[]> {
        return await this.postModel.find().exec();
    }



}
