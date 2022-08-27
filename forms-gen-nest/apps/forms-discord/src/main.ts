import { NestFactory } from '@nestjs/core';
import { FormsDiscordModule } from './forms-discord.module';

async function bootstrap () {
    const app = await NestFactory.create( FormsDiscordModule );
    await app.listen( 3000 );
}
bootstrap();
