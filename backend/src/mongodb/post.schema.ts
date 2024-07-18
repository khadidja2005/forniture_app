import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";


@Schema()
export class Post extends Document{
    @Prop({required: true})
    name : string;

    @Prop()
    description : string;   

    @Prop({required: true})
    price : number;

    @Prop()
    category : string;

    @Prop()
    photourl : string;

    @Prop()
    quantity : number;

    @Prop({type: [Types.ObjectId], ref: 'User'})
    likes : Types.ObjectId[];
}

export const PostScema = SchemaFactory.createForClass(Post);