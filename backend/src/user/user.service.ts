import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/mongodb/user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private UserModel : Model<User>){}

    async CreatePanier (userId : string , postId : string , quantity : number) : Promise<User> {
        const user = await this.UserModel.findById(userId)
        user.panier.push({postId , quantity})
        user.save()
        return user

    }

}
