import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from 'src/mongodb/post.schema';

@Injectable()
export class PostService {

    constructor(@InjectModel(Post.name) private postModel : Model<Post>) {}

    async createPost(name : string , description : string , price : number , category : string , photourl : string , quantity : number):Promise<Post>{
        const newPost = new this.postModel({name , description , price , category , photourl , quantity})
        return await newPost.save();
    }
    async getAllPosts():Promise<Post[]> {
        return await this.postModel.find().exec();
    }



}
