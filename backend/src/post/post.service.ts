import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { Post } from 'src/mongodb/post.schema';
import { Review } from 'src/mongodb/review.shema';

@Injectable()
export class PostService {

    constructor(@InjectModel(Post.name) private postModel : Model<Post> , @InjectModel(Review.name) private reviewModel : Model<Review> , private readonly uploadService: CloudinaryService) {}

    async createPost(name : string , description : string , price : number , category : string , file : Express.Multer.File , quantity : number):Promise<Post>{
        const photourl = await this.uploadService.uploadImage(file)  
        const newPost = new this.postModel({name , description , price , category , photourl : photourl.url , quantity})
        return await newPost.save();
    }
    async getAllPosts():Promise<Post[]> {
        return await this.postModel.find().populate("reviews").exec();
    }
    async getPostById(id: string): Promise<Post> {
        return await this.postModel.findById(id).populate({
            path: 'reviews',
            populate: {
                path: 'id_user',
                model: 'User'
            }
        }).exec();
    }
    async quantitysold (quantity: number , post_id :string ) :Promise<string> {
        const post = await this.postModel.findById(post_id);
        if (post.quantity < quantity) {
            return "Not enough quantity";
        }
        post.quantity -= quantity;
        await post.save()
        return "Quantity updated";

    } 
    async Updatelike(userid : string , postid :string) :Promise<string> {
        const post = await this.postModel.findById(postid);
    if (! post.likes.includes(userid)){
        post.likes.push(userid)
        await post.save()
        return "Liked"
    }
    post.likes = post.likes.filter(like => like !== userid)
    await post.save()
    return "Unliked"
    }
    async addReview(id_post : string , id_user : string , comment : string):Promise<string>{
        const post = await this.postModel.findById(id_post);
        const review = new this.reviewModel({id_user , comment})
        try{
        await review.save();
        post.reviews.push(review) 
        await post.save() 
        return "Review added"
        }catch(err){
          return "Error" 
        }

    }



}
