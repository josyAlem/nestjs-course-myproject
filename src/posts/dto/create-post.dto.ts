import { IsNotEmpty, IsString } from "class-validator";

export class CreatePostDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsString()
  content: string;

  image: { file: Express.Multer.File; serverPath: string };
}
