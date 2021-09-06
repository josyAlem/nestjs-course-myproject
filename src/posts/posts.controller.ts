import {
  Body,
  Delete,
  Get,
  Param,
  Put,
  UploadedFile,
  UseInterceptors,
  UsePipes,
} from "@nestjs/common";
import { Controller, Post, Req } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { FileOptions } from "../middelware/image-file-options";
import { PostsService } from "./posts.service";
import { ValidationPipe } from "@nestjs/common/pipes";

@Controller("api/posts")
export class PostsController {
  constructor(private postSvc: PostsService) {}

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true, transform: true }))
  @UseInterceptors(FileInterceptor("image", FileOptions.getImageFileOptions()))
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

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.postSvc.findById(id);
  }

  @Put(":id")
  @UsePipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      skipMissingProperties: true,
    })
  )
  @UseInterceptors(FileInterceptor("image", FileOptions.getImageFileOptions()))
  update(
    @Req() req,
    @Param("id") id: string,
    @Body() updatePostDto: UpdatePostDto,
    @UploadedFile() file: Express.Multer.File
  ) {
    if(file){
      updatePostDto.image = {
      file: file,
      serverPath: req.protocol + "://" + req.get("host"),
    };
  }
    return this.postSvc.update(id, updatePostDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.postSvc.remove(id);
  }
}
