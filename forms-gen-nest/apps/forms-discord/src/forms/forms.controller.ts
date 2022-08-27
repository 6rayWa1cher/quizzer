import { Controller } from '@nestjs/common';
import { RabbitRPC, RabbitPayload } from '@golevelup/nestjs-rabbitmq';
import { EXCHANGES } from 'rmq/rmq';
import { DEFAILT_QUEUE_NAME } from '../constants';


@Controller( 'forms' )
export class FormsController {
    @RabbitRPC( {
        routingKey: 'test',
        exchange: EXCHANGES.SHARED_FORMS,
        queue: DEFAILT_QUEUE_NAME,
    } )
    test ( @RabbitPayload() data: string ) {
        console.log( 'got data', data );
        return 'test from discord';
    }
}
