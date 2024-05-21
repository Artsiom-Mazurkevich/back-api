import { NestFactory } from '@nestjs/core';
import { AppModule } from './APP/app.module';
import * as process from 'process';
import { SwaggerModule } from '@nestjs/swagger';
import { swaggerConfig } from './config/swaggerConfig';

const PORT = process.env.SERVER_PORT || 3000;

async function bootstrap() {
   const app = await NestFactory.create(AppModule);

   //Global prefix
   app.setGlobalPrefix('api/v1');

   // add swagger
   const document = SwaggerModule.createDocument(app, swaggerConfig);
   SwaggerModule.setup('api/v1/docs', app, document);

   await app.listen(PORT);
}

bootstrap().then(() => console.log(`Server started  http://localhost:${PORT}/api/v1`));
