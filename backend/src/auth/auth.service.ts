import { Injectable } from '@nestjs/common';
import { UserService } from './user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private Userservice : UserService,
        private jwtservice: JwtService
    ){}
    async signUp (email:string , password:string , username:string , name : string):Promise<any>{
     const user = await this.Userservice.create(username , name , email , password)
     return this.login(user)
    }
    async signIn (email:string , password: string):Promise<any>{
        const user = await this.Userservice.valideUser(email , password)
        if (!user){
            return "user does not exist"
        }
        return this.login(user)
    }
    async login (user:any){
    const payload = { email: user.email, sub: user._id , username : user.username , name : user.name , photourl : user.photourl , panier : user.panier , role : user.role };
    return {
        access_token : this.jwtservice.sign(payload , { expiresIn: '1h' })
    }
    }
}
