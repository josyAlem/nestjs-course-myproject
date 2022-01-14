import { join } from "path";

export const AppPaths = {
  publicPath: join("__dirname", "..", "public"),
  imagesPath: "images",
  staticFrontendDir: join(__dirname, "..", "front-end"),
  staticFrontendFile: join(__dirname, "..", "front-end", "index.html"),
};
