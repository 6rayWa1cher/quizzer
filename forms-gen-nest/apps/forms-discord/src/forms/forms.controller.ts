import { Controller } from '@nestjs/common';
import { RabbitRPC, RabbitPayload } from '@golevelup/nestjs-rabbitmq';
import { EXCHANGES } from 'rmq/rmq';
import { DEFAULT_QUEUE_NAME } from '../constants';
import { CompleteForm, CompleteFormResponse } from 'prisma-forms/prisma-forms';
import { FormsService } from './forms.service';


@Controller( 'forms' )
export class FormsController {
    constructor ( private forms_service: FormsService ) { }

    @RabbitRPC( {
        routingKey: 'form.created',
        exchange: EXCHANGES.SHARED_FORMS,
        queue: 'forms-discord:form.created',
    } )
    async form_created ( @RabbitPayload() data: CompleteForm ) {
        this.forms_service.create_channel_for_notification( data );
    }

    @RabbitRPC( {
        routingKey: 'form.response.created',
        exchange: EXCHANGES.SHARED_FORMS,
        queue: 'forms-discord:form.response.created',
    } )
    async form_response_created ( @RabbitPayload() data: CompleteFormResponse ) {
        this.forms_service.send_message_for_response( data );
    }
}
