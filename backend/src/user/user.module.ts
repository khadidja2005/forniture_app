import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserSchema } from 'src/mongodb/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { PostModule } from 'src/post/post.module';
import { PostScema } from 'src/mongodb/post.schema';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports : [
    MongooseModule.forFeature(
      [{name : "User" , schema : UserSchema}]
    ) ,
    MongooseModule.forFeature(
      [{name : "Post" , schema : PostScema}]
    ) ,
    CloudinaryModule ,
    JwtModule.register({
      secret:"khadidja",
      signOptions: { expiresIn: '60m' }
    })
  ],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
