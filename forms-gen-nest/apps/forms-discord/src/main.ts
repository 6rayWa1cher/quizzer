import { NestFactory } from '@nestjs/core';
import { FormsDiscordModule } from './forms-discord.module';

async function bootstrap () {
    const app = await NestFactory.create(
        FormsDiscordModule,
        {
            logger: ['log', 'error', 'warn', 'debug', 'verbose'],
        },
    );
    await app.listen( 3000 );
}
bootstrap();
