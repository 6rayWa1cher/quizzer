import { Module } from '@nestjs/common';
import { FormsService } from './forms.service';
import { FormsController } from './forms.controller';
import { RmqModule } from 'rmq/rmq';
import { DiscordModule } from '../../../../libs/discord/src/index'; // strangly nest cants resolve exactly discrod alias

@Module( {
    imports: [RmqModule, DiscordModule],
    providers: [FormsService],
    controllers: [FormsController]
} )
export class FormsModule { }
