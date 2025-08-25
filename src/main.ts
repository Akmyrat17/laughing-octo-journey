import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Allow everything
  app.enableCors({
    methods: '*',
    credentials: true,
    origin: '*',
  });

  await app.listen(3000, '0.0.0.0');
  console.log('🚀 Server running on http://0.0.0.0:3000');
}
bootstrap();
