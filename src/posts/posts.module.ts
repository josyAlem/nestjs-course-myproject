import { Module } from "@nestjs/common";
import { PostsController } from "./posts.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { PostSchema,Post } from "./schemas/post.schema";
import { PostsRepository } from './posts.repository';
import { PostsService } from "./posts.service";

@Module({
  controllers: [PostsController],
  providers: [PostsService,PostsRepository],
  imports: [MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }])
    
  ],
  
})
export class PostsModule {}
