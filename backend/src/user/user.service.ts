import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { Post } from 'src/mongodb/post.schema';
import { User } from 'src/mongodb/user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private UserModel : Model<User> ,
                @InjectModel(Post.name) private PostModel : Model<Post> ,
                 private readonly uploadService : CloudinaryService ){}

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
    async updateImage( id : string ,username : string , name : string , file?: Express.Multer.File ):Promise<User | string>{
        const user = await this.UserModel.findById(id)
        if (!user){
          return "user not found" 
        }
        if (file){
         const photourl = await this.uploadService.uploadImage(file)
         user.photourl = photourl.url
        }
         
         user.name = name
         user.username = username
         user.save()
        return "user updated successfully"
    }
     async getAllusers():Promise<User[]>{
        return await this.UserModel.find().exec()
     }
     async updaterole(id : string , role : string):Promise<User | string> {
        const user = await this.UserModel.findById(id)
        if (!user){
          return "user not found"
        }
        user.role=role
        user.save()
        return user
     }

}
