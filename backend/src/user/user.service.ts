import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from 'src/mongodb/post.schema';
import { User } from 'src/mongodb/user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private UserModel : Model<User> ,
                @InjectModel(Post.name) private PostModel : Model<Post>){}

    async CreatePanier (userId : string , postId : string , quantity : number) : Promise<User> {
        const user = await this.UserModel.findById(userId)
        user.panier.push({postId , quantity})
        user.save()
        return user

    }
    async getUserById(id : string):Promise<User>{
        return await this.UserModel.findById(id).exec();
    }
    async getpanier(id : string):Promise<{post : Post , quantity : number}[] | string> {
        const user = await this.UserModel.findById(id)
        if (!user){
            return "user not found"
        }
        const panier = user.panier
        if (!panier){
            return "panier not found"
        }
        const populatepanier = await Promise.all(panier.map(async (item)=> {
            const post = await this.PostModel.findById(item.postId)
            if (!post){
                return "post not found"
            }
            return {post , quantity : item.quantity} as {post : Post , quantity : number}
        }))
        return populatepanier as {post : Post , quantity : number}[]

    }

}
