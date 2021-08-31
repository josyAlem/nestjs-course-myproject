import { Body, UploadedFile, UseInterceptors } from "@nestjs/common";
import { Controller, Post, Req } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { ImageFileOptions } from '../middelware/image-file-options';

@Controller("api/posts")
export class PostsController {
  constructor() {}

  @Post()
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
    console.log(createPostDto);
  }
  // @Get()
  // findAll() {
  //   return this.postsService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.postsService.findOne(id);
  // }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
  //   return this.postsService.update(id, updatePostDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.postsService.remove(id);
  // }
}
