import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 
  const config = new DocumentBuilder()
  .setTitle('Farmácia API')
  .setDescription('API de gerenciamento de categorias de uma farmácia')
  .setContact("Lohanna B","https://github.com/lohannab/","lohannabt@gmail.com")
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);

  process.env.TZ = '-03:00';

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors()
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
