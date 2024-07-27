import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";


@Schema()
class PanierItem {
  @Prop({ref: 'Post', required: true })
  postId: string;

  @Prop({ required: true })
  quantity: number;
}

const PanierItemSchema = SchemaFactory.createForClass(PanierItem);
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

    @Prop({ type: [PanierItemSchema], default: [] })
    panier: PanierItem[];

}
export const UserSchema = SchemaFactory.createForClass(User);