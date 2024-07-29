import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

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
}
