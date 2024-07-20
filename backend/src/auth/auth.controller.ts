import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authservice : AuthService){}

  @Post("signup")
  async signup(
    @Body("email") email:string,
    @Body("password") password : string,
    @Body("username") username : string,
    @Body("name") name : string
  ){
   return this.authservice.signUp(email , password , username , name)
  }


  @Post("signin")
  async signin(
  @Body("email") email : string ,
  @Body("password") password : string
  ){
   return this.authservice.signIn(email , password)
  }


}
