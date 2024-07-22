import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
constructor( private postservice : PostService){}

 @Post("create")
 async createPost (
    @Body("name") name : string,
    @Body('description') description : string,
    @Body('price') price : number,
    @Body('category') category : string,
    @Body('photourl') photourl : string,
    @Body('quantity') quantity : number
 ){
   return this.postservice.createPost(name , description , price , category , photourl , quantity)
 }

 @Get("all")
 async getAllPosts(){
    return this.postservice.getAllPosts()
 }

}
