import { diskStorage } from "multer";
import { AppPaths } from "src/appPaths";

const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
};

const imageFileFilter = (req, file, cb) => {
  const isValid = MIME_TYPE_MAP[file.mimetype];
  let error = new Error("Invalid mime type");
  if (isValid) {
    error = null;
  }
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
  limits: { fileSize: 1024 * 1000 * 1000 * 25 }, // 25 Mb
};
