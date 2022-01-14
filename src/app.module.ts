import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { MulterModule } from "@nestjs/platform-express";
import { ServeStaticModule } from "@nestjs/serve-static";
import "reflect-metadata";
import { envVariables } from "src/shared/config/env.enums";
import { AppPaths } from "./appPaths";
import { PostsModule } from "./posts/posts.module";

const mongodb_cred: string = envVariables.MONGODB_CREDENTIALS;

@Module({
  imports: [
    PostsModule,
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
      cache: true,
      expandVariables: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: `mongodb+srv://${configService.get(
          mongodb_cred
        )}?retryWrites=true&w=majority`,
      }),
      inject: [ConfigService],
    }),
    MulterModule.register({
      dest: AppPaths.imagesPath,
    }),
    ServeStaticModule.forRoot({
      rootPath: AppPaths.staticFrontendDir,
    }),
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
