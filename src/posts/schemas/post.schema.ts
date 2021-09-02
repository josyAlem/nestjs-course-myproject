import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema()
export class Post {
  @Prop({ required: true })
  title: string;

  @Prop({ required: false })
  content: string;

  @Prop({ required: false })
  imagePath: string | 'Buffer' ;
}

//export type PostDocument = Post & Document;
export const PostSchema = SchemaFactory.createForClass(Post);