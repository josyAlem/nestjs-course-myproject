import { diskStorage, DiskStorageOptions, memoryStorage } from "multer";
import { AppPaths } from "src/appPaths";
export class FileOptions {
  private static Image_Mime_Types = {
    "image/png": "png",
    "image/jpeg": "jpg",
    "image/jpg": "jpg",
  };

  private static imageFileFilter = (req, file, cb) => {
    let error;
    if (FileOptions.Image_Mime_Types[file.mimetype]) error = null;
    else error = new Error("Invalid image mime type");

    cb(error, true);
  };
  private static editFileName(req, file, cb) {
    return cb(
      null,
      FileOptions.getEditedFileName(file.originalname, file.mimetype)
    );
  }
  private static diskStorageOption = diskStorage({
    destination: AppPaths.publicPath + "/" + AppPaths.imagesPath,
    filename: FileOptions.editFileName,
  });

  static getEditedFileName(filename: string, mimeType: string) {
    const name = filename.toLowerCase().split(" ").join("-");
    return Date.now() + "_" + name;
  }

  static getImageFileOptions() {
    return {
      storage: memoryStorage(), //FileOptions.diskStorageOption,
      fileFilter: FileOptions.imageFileFilter,
      limits: { fileSize: 1000 * 1000 * 7 }, // 5 Mb
    };
  }
}
