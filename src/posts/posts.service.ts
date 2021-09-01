import { Injectable } from '@nestjs/common';
import { resolve } from 'path/posix';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostsRepository } from './posts.repository';
import { Post, PostDocument } from './schemas/post.schema';

@Injectable()
export class PostsService {
constructor(private postRepo:PostsRepository){}


 create(createPostDto: CreatePostDto) {
return this.postRepo.create(createPostDto);
}
  

 findAll() {
 return this.postRepo.findAll();
}

findById(id: string) {
    return this.postRepo.findById(id);
  }

// //   update(id: string, updatePostDto: UpdatePostDto) {
// //     return `This action updates a #${id} post`;
// //   }

// //   remove(id: string) {
// //     return `This action removes a #${id} post`;
// //   }
 }
