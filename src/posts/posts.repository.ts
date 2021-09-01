import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreatePostDto } from "./dto/create-post.dto";
import { Post, PostDocument } from "./schemas/post.schema";
import { Injectable, NotFoundException } from "@nestjs/common";
import { AppPaths } from "src/appPaths";
import { join } from "path";
import { getEditedFileName } from "src/middelware/image-file-options";
import { UpdatePostDto } from "./dto/update-post.dto";

@Injectable()
export class PostsRepository {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  async create(dto: CreatePostDto) {
    let fileName: string = getEditedFileName(
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
      imagePath: fileNameFull,
    });
    return post.save().then((createdPost) => {
      return {
        message: "Added successfully!",
        data: createdPost,
      };
    });
  }

  async findAll() {
    return this.postModel.find().then((res) => {
      console.log(res);
      return { message: "Successful fetch!", data: res };
    });
  }

  async findById(id: string) {
    return this.postModel.findById(id).then((post) => {
      if (post) {
        return { message: "Successful fetch!", data: post };
      } else {
        throw new NotFoundException();
      }
    });
  }

  async update(dto: UpdatePostDto) {
    let fileName: string = getEditedFileName(
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
      _id: dto.id,
      title: dto.title,
      content: dto.content,
      imagePath: fileNameFull,
    });
    return this.postModel.updateOne({ _id: post._id }, post).then((result) => {
      return {
        message: `Updated successfully!  Id=${post.id}`,
        data: dto,
      };
    });
  }

  async remove(id: string) {
    return this.postModel.deleteOne({ _id: id }).then((result) => {
      console.log(result);
      if (result.deletedCount > 0)
        return {
          message: `Deleted successfully! Id=${id}`,
          data: null,
        };
      else throw new NotFoundException(`Data not found for Id=${id}`);
    });
  }
}
