import { Module } from '@nestjs/common';
import { FormsDiscordController } from './forms-discord.controller';
import { FormsDiscordService } from './forms-discord.service';

@Module( {
    imports: [],
    controllers: [FormsDiscordController],
    providers: [FormsDiscordService],
    } )
export class FormsDiscordModule {}
