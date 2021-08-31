import { Module } from "@nestjs/common";
import { PostsController } from "./posts.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { PostSchema,Post } from "./schemas/post.schema";

@Module({
  controllers: [PostsController],
  providers: [],
  imports: [MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }])
    
  ],
  
})
export class PostsModule {}
