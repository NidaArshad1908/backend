/* eslint-disable @typescript-eslint/no-var-requires */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';

const cors = require('cors');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Api Beckend')
    .setDescription('API are awesome to plan your day')
    .setVersion('1.0')
    .addTag('Backend')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.use(cookieParser());
  app.enableCors({
    origin: ['http://localhost:3000'],
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: false,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const corsOpts = {
    origin: '*',

    methods: ['GET', 'POST', 'PUT', 'DELETE'],

    allowedHeaders: ['Content-Type'],
  };

  app.use(cors(corsOpts));
  await app.listen(4000);
}
bootstrap();
