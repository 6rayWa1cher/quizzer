import { NestFactory } from '@nestjs/core';
import { FormsDbModule } from './forms-db.module';

async function bootstrap () {
    const app = await NestFactory.create( FormsDbModule );
    await app.listen( 3000 );
}
bootstrap();
