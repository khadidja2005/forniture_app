import { Body, Controller, Get, Param, Post, UploadedFile, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
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
    @Get(":id")
    async getoneArticle(@Param("id") id :string) {
        if (!id) {
            throw new Error("Id is required")
        }
        const article = await this.articleservice.getArticleById(id)
        if (!article) {
            throw new Error("Article not found")
        }
        return article
    }
}
