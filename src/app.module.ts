import { MiddlewareConsumer, Module, RequestMethod, Put } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { MulterModule } from "@nestjs/platform-express";
import { TypeOrmModule } from "@nestjs/typeorm";
import { join } from "path";
import { PostsModule } from "./posts/posts.module";
import { AppPaths } from './appPaths';
import multer from "multer";
const mongodb_cred = process.env.MONGODB_CREDENTIALS;

@Module({
  imports: [
    PostsModule,
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),
    MongooseModule.forRoot(
       "mongodb+srv://josy:2oBMTMfUiv5aDBNm@cluster0.9i8oi.mongodb.net/mean-course-db?retryWrites=true&w=majority"
),
MulterModule.register({
  dest:AppPaths.imagesPath
})
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer
  //     .apply(ExtractFileMiddleware)
  //     .forRoutes({path:'api/posts',method:RequestMethod.POST},{path:'api/posts/:id',method:RequestMethod.PUT});
  // }
}
