import { diskStorage } from "multer";
import { AppPaths } from "src/appPaths";

const Image_Mime_Types = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
};

const imageFileFilter = (req, file, cb) => {
  let error;
  if(Image_Mime_Types[file.mimetype])
   error=null;
   else
   error=new Error("Invalid image mime type");

   cb(error, true);
};
const editFileName = (req, file, cb) => {
  return cb(null, getEditedFileName(file.originalname, file.mimetype));
};
export function getEditedFileName(filename: string, mimeType: string) {
  const name = filename.toLowerCase().split(" ").join("-");
  return Date.now() + "_"+name;
}
export const ImageFileOptions = {
  storage: diskStorage({
    destination: AppPaths.publicPath + "/" + AppPaths.imagesPath,
    filename: editFileName,
  }),
  fileFilter: imageFileFilter,
  limits: { fileSize: 1000 * 1000 * 7 }, // 5 Mb
};
