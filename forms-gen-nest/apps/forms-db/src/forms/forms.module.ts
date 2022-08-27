import { Module } from '@nestjs/common';
import { EXCHANGES } from 'rmq/rmq';
import { FormsController } from './forms.controller';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { ConfigService } from '@nestjs/config';
import { FormsService } from './forms.service';
import { PrismaFormsModule } from 'libs/prisma-forms/src';

@Module( {
    imports: [
        RabbitMQModule.forRootAsync( RabbitMQModule, {
            useFactory: ( config_service: ConfigService ) => {
                const EXC: Array<{ name: string, type: string }> = [];
                for ( const e in EXCHANGES ) {
                    EXC.push( {
                        name: EXCHANGES[e],
                        type: 'topic',
                    } )
                }
                return {
                    uri: config_service.get<string>( 'amqp_url' ),
                    connectionInitOptions: { wait: true, timeout: 15000 },
                    exchanges: EXC,
                    enableControllerDiscovery: true,
                    registerHandlers: config_service.get<boolean>( 'rmq_handlers', false ),
                    channels: {
                        channel_1: {
                            prefetchCount: 50,
                            default: true,
                        }
                    }
                }
            },
            inject: [ConfigService]
        } ),
        PrismaFormsModule
    ],
    controllers: [FormsController],
    providers: [FormsService]
} )
export class FormsModule { }
