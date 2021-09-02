import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { AppPaths } from './appPaths';
import { envVariables } from "src/shared/config/env.enums";

const port: string = envVariables.PORT;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(AppPaths.publicPath, {
    prefix: '/public'
  });
  const configService = app.get(ConfigService);
  await app.listen(configService.get(port));
}
bootstrap();
