export class CreatePostDto {
    title: string;
    content:string;
    image:{file:Express.Multer.File
            serverPath:string}
}
