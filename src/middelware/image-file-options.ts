import { diskStorage } from 'multer';
import { AppPaths } from 'src/appPaths';

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
    cb(error,true);
  };
const editFileName=(req, file, cb) => {
    const name = file.originalname.toLowerCase().split(" ").join("-");
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, name + "-" + Date.now() + "." + ext);
  };
  
  export const ImageFileOptions={
    storage:  diskStorage({
    destination:AppPaths.imagesPath ,
    filename: editFileName
  }),
  fileFilter:imageFileFilter,
  limits:{fileSize:1024*1000*1000*25} // 25 Mb

}

 
