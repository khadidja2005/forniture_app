import { Body, Controller, Get, Post, UploadedFile, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
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

}
