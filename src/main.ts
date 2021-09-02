import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { AppPaths } from './appPaths';
import { envVariables } from "src/shared/config/env.enums";

const port: string = envVariables.PORT;
const client_addr: string = envVariables.CLIENT_ADDRESS;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get(ConfigService);
 
  app.useStaticAssets(AppPaths.publicPath, {
    prefix: '/public'
  });

  app.enableCors({origin:[configService.get(client_addr)]});

  await app.listen(configService.get(port));
}
bootstrap();
