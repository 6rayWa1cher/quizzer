import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FormDto } from 'apps/forms-rest/src/forms/dto/form.dto';
import { FormResponseDto } from 'apps/forms-rest/src/forms/dto/form_response.dto';
import { classToClassFromExist, classToPlain, plainToClass } from 'class-transformer';
import { CategoryChannel, ChannelType, Guild, TextChannel } from 'discord.js';
import { CompleteForm, CompleteFormResponse } from 'prisma-forms/prisma-forms';
import { DiscordService } from '../../../../libs/discord/src/index'; // strangly nest cants resolve exactly discrod alias

@Injectable()
export class FormsService implements OnModuleInit {
    private readonly logger = new Logger( FormsService.name );
    notification_category_channel: CategoryChannel;

    constructor (
        private discord_service: DiscordService,
        private config_service: ConfigService,
    ) { }

    private async find_guild (): Promise<Guild> {
        const guild_name = this.config_service.get( 'discord.server_name' );
        const guilds = await this.discord_service.guilds.fetch();
        for ( const [_, g] of guilds ) {
            if ( g.name === guild_name ) {
                this.logger.log( `Found guild "${g.name}" with id "${g.id}"` );
                return await g.fetch();
            } else {
                throw new Error( `No guild with name "${guild_name}" was found` );
            }
        }
    }

    private async find_or_create_notification_category ( guild: Guild ): Promise<CategoryChannel> {
        const category_name = this.config_service.get( 'discord.notification_category_name', 'Notifications' );
        const channels = await guild.channels.fetch();
        let category: CategoryChannel;
        for ( const [_, channel] of channels ) {
            if ( channel.type == ChannelType.GuildCategory && channel.name === category_name ) {
                this.logger.log( `Found notification category "${channel.name}" with id "${channel.id}"` );
                return channel;
            }
        }
        return guild.channels.create( { name: category_name, type: ChannelType.GuildCategory } )
            .then( ( channel ) => {
                this.logger.log( `Created notification category "${channel.name}" with id "${channel.id}"` );
                return channel;
            } );
    }

    async onModuleInit () {
        this.notification_category_channel = await this.find_or_create_notification_category( await this.find_guild() );
    }

    private form_to_channel_name ( data: CompleteForm ) {
        return `${data.id}-${data.name}`;
    }

    private get_text_channel_by_form_id ( id: number ): TextChannel | null {
        for ( const [_, channel] of this.notification_category_channel.children.cache ) {
            if ( channel.type === ChannelType.GuildText && channel.name.startsWith( `${id}-` ) ) {
                return channel;
            }
        }
        return null;
    }

    async create_channel_for_notification ( data: CompleteForm ) {
        await this.notification_category_channel.children.create( { name: this.form_to_channel_name( data ), type: ChannelType.GuildText } )
            .then( async ( channel ) => {
                await ( await channel.send( '```' + JSON.stringify( classToPlain( new FormDto( data ) ), null, 2 ) + '```' ) ).pin()
                    .then( () => {
                        this.logger.log( `Created channel for form with id "${data.id}"` );
                    } );
            } );
    }

    async send_message_for_response ( data: CompleteFormResponse ) {
        const channel = this.get_text_channel_by_form_id( data.form_id );
        if ( channel === null ) {
            throw new Error( `No channel for form id "${data.form_id}" was found` );
        }
        await channel.send( '```' + JSON.stringify( classToPlain( new FormResponseDto( data ) ), null, 2 ) + '```' )
            .then( () => {
                this.logger.log( `Sent message for response with id "${data.id}"` );
            } );
    }
}
