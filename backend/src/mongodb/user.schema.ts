import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";


export type UserDocument = User & Document;
@Schema()

export class User extends Document {
    @Prop({required: true})
    username: string;

    
    @Prop({required:true , unique:true})
    email: string;

    @Prop({required:true , unique:true})
    password: string;

    @Prop()
    name : string

    @Prop()
    role: string;

    @Prop()
    photourl : string;

    @Prop({type: [Types.ObjectId], ref: 'Post'})
    panier : Types.ObjectId[];

}
export const UserSchema = SchemaFactory.createForClass(User);