import { Module } from '@nestjs/common';
import { EXCHANGES, RmqModule } from 'rmq/rmq';
import { FormsController } from './forms.controller';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { ConfigService } from '@nestjs/config';
import { FormsService } from './forms.service';
import { PrismaFormsModule } from 'libs/prisma-forms/src';

@Module( {
    imports: [
        RmqModule,
        PrismaFormsModule
    ],
    controllers: [FormsController],
    providers: [FormsService]
} )
export class FormsModule { }
