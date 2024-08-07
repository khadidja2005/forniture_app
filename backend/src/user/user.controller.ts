import { Body, Controller, Get, Param, Post, UploadedFile, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { Multer } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('user')
export class UserController {
   constructor(private userservice : UserService){}
    @Post("addpanier")
    async addPanier(
        @Body("userId") userId : string,
        @Body("postId") postId : string,
        @Body("quantity") quantity : number
    ){
        return this.userservice.CreatePanier( userId , postId , quantity)
    }
    @Get("getuser")
    async getUserById(
        @Body("id") id : string
    ){
        return this.userservice.getUserById(id)
    }
    @Get("getpanier/:id")
    async getPanier(
        @Param("id") id : string
    ){
        return this.userservice.getpanier(id)
    }
    @Post("update")
    @UseInterceptors(FileInterceptor("file"))
    @UsePipes(new ValidationPipe())
    async updatepro (
        @Body("id") id : string,
        @Body("username") username : string,
        @Body("name") name : string,
        @UploadedFile("file") file?: Express.Multer.File
    ) {
        return this.userservice.updateImage(id , username , name , file)
    }

    @Get("all")
    async getAllusers(){
        return this.userservice.getAllusers()
    }

    @Post("updaterole")
    async updaterole(
        @Body("id") id : string,
        @Body("role") role : string
    ){
        return this.userservice.updaterole(id , role)
    }
}
