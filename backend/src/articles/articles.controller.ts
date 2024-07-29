import { Body, Controller, Get, Post, UploadedFile, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ArticlesService } from './articles.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('articles')
export class ArticlesController {
    constructor( private articleservice : ArticlesService){}

    @Post("create")
    @UseInterceptors(FileInterceptor("file"))
    @UsePipes(new ValidationPipe())
    async createArticle (
        @Body("title") title : string,
        @Body('content') content : string,
        @UploadedFile("file") file : Express.Multer.File
    ){
        return this.articleservice.createArticle(title , content , file)
    }

    @Get("all")
    async getAllArticles(){
        return this.articleservice.getAllArticles()
    }
}
