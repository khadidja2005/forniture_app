import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './Strategy/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from './user/user.service';
import { PassportModule } from '@nestjs/passport';
import { User, UserSchema } from 'src/mongodb/user.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
   JwtModule.register({
    secret:"khadidja",
    signOptions: { expiresIn: '60m' }
   }) ,
   PassportModule,
   MongooseModule.forFeature(
    [{name : "User" , schema : UserSchema}])
  ],
  controllers: [AuthController],
  providers: [AuthService , JwtStrategy , UserService],
  exports: [UserService]
})
export class AuthModule {}
