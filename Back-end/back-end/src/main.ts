import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors({
    origin: '*',  // Dominios permitidos
    methods: 'GET,POST,PUT,DELETE',   // Métodos HTTP permitidos
    allowedHeaders: 'Content-Type,Authorization,x-api-key',  // Headers permitidos
  });

  await app.listen(3000);
}
bootstrap();
