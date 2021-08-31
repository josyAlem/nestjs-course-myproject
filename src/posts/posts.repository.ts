import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreatePostDto } from "./dto/create-post.dto";
import { Post, PostDocument } from "./schemas/post.schema";
import { Injectable } from "@nestjs/common";
import { AppPaths } from "src/appPaths";
import { join } from 'path';
import { getEditedFileName } from "src/middelware/image-file-options";

@Injectable()
export class PostsRepository {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}
  async create(dto:CreatePostDto) { 
    let fileName:string=getEditedFileName(dto.image.file.originalname,dto.image.file.mimetype);
    const fileNameFull:string=dto.image.serverPath+"/"+ AppPaths.publicPath+"/"+AppPaths.imagesPath+"/"+ fileName;
    const post = new this.postModel({
      title: dto.title,
      content: dto.content,
      imagePath:fileNameFull,
    });
   return post.save().then((createdPost) => {
  return({
        message: "Post added successfully",
        post: createdPost
      });
  });
}

//   async update(req, res, next) {
//     let imagePath = req.body.imagePath;
//     if (req.file) {
//       const url = req.protocol + "://" + req.get("host");
//       imagePath = url + "/images/" + req.file.filename;
//     }
//     const post = new this.postModel({
//       _id: req.body.id,
//       title: req.body.title,
//       content: req.body.content,
//       imagePath: imagePath,
//     });
//     //console.log(post);
//     return  this.postModel.updateOne({ _id: req.params.id }, post).then((result) => {
//       res.status(200).json({ message: "Update successful!" });
//     });
//   }

//   async findAll(req, res, next) {
//     return   this.postModel.find().then((docs) => {
//       console.log(docs);
//       res.status(200).json({ message: "Successful fetch!", data: docs });
//     });
//   }
//   async findById(req, res, next) {
//     return  this.postModel.findById(req.params.id).then((post) => {
//       if (post) {
//         res.status(200).json({ message: "Successful fetch!", data: post });
//       } else {
//         res.status(404).json({ message: "Post not found!" });
//       }
//     });
//   }

//   async deleteById(req, res, next) {
//     return  this.postModel.deleteOne({ _id: req.params.id }).then((result) => {
//       //console.log(result);
//       res.status(200).json({ message: "Post Deleted!" });
//     });
//   }
 }
