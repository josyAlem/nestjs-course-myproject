import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { AppPaths } from "src/appPaths";
import { FileOptions } from "src/middelware/image-file-options";
import * as globals from "src/shared/globals";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { Post } from "./schemas/post.schema";

@Injectable()
export class PostsRepository {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  async create(dto: CreatePostDto): Promise<globals.ResponseWrapper<Post>> {
    let fileName: string = FileOptions.getEditedFileName(
      dto.image.file.originalname,
      dto.image.file.mimetype
    );
    const fileNameFull: string =
      dto.image.serverPath +
      "/" +
      AppPaths.publicPath +
      "/" +
      AppPaths.imagesPath +
      "/" +
      fileName;
    const post = new this.postModel({
      title: dto.title,
      content: dto.content,
      imagePath: dto.image.file.buffer, //fileNameFull,
    });
    return post.save().then((createdPost) => {
      return new globals.ResponseWrapper<Post>(
        "Added successfully!",
        createdPost
      );
    });
  }

  async findAll(): Promise<globals.ResponseWrapper<Post[]>> {
    return this.postModel.find().then((res: Post[]) => {
      // console.log(res);
      return new Promise<globals.ResponseWrapper<Post[]>>((resolve, rej) => {
        resolve(
          new globals.ResponseWrapper<Post[]>("Fetched successfully!", res)
        );
      });
    });
  }

  async findById(id: string): Promise<globals.ResponseWrapper<Post>> {
    return this.postModel.findById(id).then((post) => {
      if (post) {
        return new globals.ResponseWrapper<Post>("Fetched successfully!", post);
      } else {
        throw new NotFoundException();
      }
    });
  }

  async update(dto: UpdatePostDto): Promise<globals.ResponseWrapper<Post>> {
    let post = new this.postModel({
      _id: dto.id,
      title: dto.title,
    });
    if (dto.image) {
      let fileName: string = FileOptions.getEditedFileName(
        dto.image.file.originalname,
        dto.image.file.mimetype
      );
      const fileNameFull: string =
        dto.image.serverPath +
        "/" +
        AppPaths.publicPath +
        "/" +
        AppPaths.imagesPath +
        "/" +
        fileName;

      post.imagePath = dto.image.file.buffer; //fileNameFull,
    }

    if (dto.content) {
      post.content = dto.content;
    }

    return this.postModel.updateOne({ _id: post._id }, post).then((result) => {
      //      console.log(result);
      if (result.matchedCount == 0)
        throw new NotFoundException(`Data not found for Id=${post._id}`);
      else if (result.modifiedCount <= 1)
        return new globals.ResponseWrapper<Post>("Updated successfully!", post);
    });
  }

  async remove(id: string): Promise<globals.ResponseWrapper<null>> {
    return this.postModel.deleteOne({ _id: id }).then((result) => {
      console.log(result);
      if (result.deletedCount == 0)
        throw new NotFoundException(`Data not found for Id=${id}`);
      else
        return new globals.ResponseWrapper<null>(
          `Deleted successfully! Id=${id}`,
          null
        );
    });
  }
}
