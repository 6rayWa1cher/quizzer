import { Module } from '@nestjs/common';
import { FormsDiscordController } from './forms-discord.controller';
import { FormsDiscordService } from './forms-discord.service';
import { ConfigModule } from '@nestjs/config';
import { FormsModule } from './forms/forms.module';
import configuration from '../config/configuration';
import shared_configuration from 'apps/shared_configuration';
import { RmqModule } from 'rmq/rmq';

@Module( {
    imports: [
        ConfigModule.forRoot( {
            isGlobal: true,
            cache: true,
            load: [shared_configuration, configuration]
        } ),
        FormsModule,
        RmqModule,
    ],
    controllers: [FormsDiscordController],
    providers: [FormsDiscordService],
} )
export class FormsDiscordModule {
    constructor () { }
}
