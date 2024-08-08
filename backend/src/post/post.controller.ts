import { Body, Controller, Get, Param, Post, UploadedFile, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { PostService } from './post.service';
import { FileInterceptor } from '@nestjs/platform-express';



@Controller('post')
export class PostController {
constructor( private postservice : PostService){}

 @Post("create")
 @UseInterceptors(FileInterceptor("file"))
 @UsePipes(new ValidationPipe())
 async createPost (
    @Body("name") name : string,
    @Body('description') description : string,
    @Body('price') price : number,
    @Body('category') category : string,
    @UploadedFile("file") file : Express.Multer.File,
    @Body('quantity') quantity : number
 ){
   return this.postservice.createPost(name , description , price , category , file , quantity)
 }

 @Get("all")
 async getAllPosts(){
    return this.postservice.getAllPosts()
 }
@Get(":id")
async getonePost(@Param("id") id :string) {
      if (!id) {
        throw new Error("Id is required")
      }
      const post = await this.postservice.getPostById(id)
      if (!post) {
        throw new Error("Post not found")
      }  
      return post
}
@Post("quantity")
async quantitysold (
  @Body("quantity")quantity :number,
  @Body("post_id") post_id :string
){
  return this.postservice.quantitysold(quantity , post_id)
}
@Post("like")
async Updatelike(
  @Body("userid") userid :string ,
  @Body("postid") postid :string
){
  return this.postservice.Updatelike(userid , postid)}


@Post("addreview")
async addReview (
  @Body("id_post") id_post :string,
  @Body("id_user") id_user :string,
  @Body("comment") comment :string
){
  return this.postservice.addReview(id_post , id_user , comment)
}

}
