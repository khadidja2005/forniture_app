import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";




@Schema()
export class Review extends Document {
    @Prop({required : true ,ref: 'User'})
    id_user : string

    @Prop({required : true})
    comment : string
    
} 

export const ReviewsSchema = SchemaFactory.createForClass(Review)