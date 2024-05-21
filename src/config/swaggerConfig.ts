import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
   .setTitle('API/v1')
   .setDescription('API docs')
   .setVersion('1.0')
   .build();
