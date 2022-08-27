import { Injectable } from '@nestjs/common';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { EXCHANGES } from 'rmq/rmq';

@Injectable()
export class FormsService {
    constructor ( private readonly amqp_connection: AmqpConnection ) {
    }

    test () {
        const message = 'ok?';
        console.log( 'sending ' );
        this.amqp_connection.request( {
            exchange: EXCHANGES.SHARED_FORMS,
            routingKey: 'test',
            payload: 'ok?',
            timeout: 5000,
        } ).then( ( val ) => {
            console.log( 'got answer', val );
        } );
        console.log( 'sent' );
        return 'Hello';
    }
}
