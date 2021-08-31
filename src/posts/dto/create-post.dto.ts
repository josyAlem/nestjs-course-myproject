import { IsNotEmpty, IsString } from "class-validator";

export class CreatePostDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  image: { file: Express.Multer.File; serverPath: string };
}
