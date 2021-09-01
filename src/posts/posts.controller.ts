import { Body, Get, Param, UploadedFile, UseInterceptors, UsePipes } from "@nestjs/common";
import { Controller, Post, Req } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { ImageFileOptions } from '../middelware/image-file-options';
import { PostsService } from './posts.service';
import { ValidationPipe } from '@nestjs/common/pipes';

@Controller("api/posts")
export class PostsController {
  constructor(private postSvc:PostsService) {}

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true,
       transform:true}))
       @UseInterceptors(FileInterceptor("image",ImageFileOptions))
       create(
    @Req() req,
    @Body() createPostDto: CreatePostDto,
    @UploadedFile() file: Express.Multer.File
  ) {
    createPostDto.image = {
      file: file,
      serverPath: req.protocol + "://" + req.get("host"),
    };
    return this.postSvc.create(createPostDto);
  }
  @Get()
  findAll() {
    return this.postSvc.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postSvc.findById(id);
  }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
  //   return this.postsService.update(id, updatePostDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.postsService.remove(id);
  // }
}
