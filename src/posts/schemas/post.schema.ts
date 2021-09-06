import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Binary } from 'typeorm';


@Schema()
export class Post {
  @Prop({ required: true })
  title: string;

  @Prop({ required: false })
  content: string;

  @Prop({ required: false })
  imagePath:  Buffer

}

//export type PostDocument = Post & Document;
export const PostSchema = SchemaFactory.createForClass(Post);