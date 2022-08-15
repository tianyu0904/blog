import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3100);
  console.log('Server running at http://127.0.0.1:3100/');
}
bootstrap();
