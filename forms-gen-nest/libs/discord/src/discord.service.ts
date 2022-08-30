import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CategoryChannel, ChannelType, Client, GatewayIntentBits } from 'discord.js';

@Injectable()
export class DiscordService extends Client {
    private readonly logger = new Logger( DiscordService.name );

    constructor ( private config_service: ConfigService ) {
        super( {
            intents: [
                GatewayIntentBits.Guilds,
            ],
        } );

        this.once( 'ready', () => {
            this.logger.log( 'Ready' );
        } );

        this.on( 'channelCreate', ( data ) => {
            this.logger.log( `Channel created ${data.name}` );
        } );

        this.on( 'messageCreate', ( data ) => {
            this.logger.log( `Message created with length ${data.content.length}` );
        } );

        this.login( this.config_service.get<string>( 'discord.bot_token' ) );
    }
}
