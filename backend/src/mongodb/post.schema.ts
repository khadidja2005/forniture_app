import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { Review, ReviewsSchema } from "./review.shema";


@Schema()
export class Post extends Document{
    @Prop({required: true })
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

    @Prop({ ref: 'User'})
    likes : string[];

    @Prop({type : [ReviewsSchema] , default : []})
    reviews: Review[]

}

export const PostScema = SchemaFactory.createForClass(Post);