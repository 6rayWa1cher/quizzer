import { Controller } from '@nestjs/common';
import { RabbitRPC, RabbitPayload } from '@golevelup/nestjs-rabbitmq';
import { EXCHANGES } from 'rmq/rmq';
import { DEFAULT_QUEUE_NAME } from '../constants';
import { FormsService } from './forms.service';
import { CompleteForm, CompleteFormResponse } from 'prisma-forms/prisma-forms';
import { CreateFormDto } from 'apps/forms-rest/src/forms/dto/create_form.dto';
import { CreateFormResponseDto } from 'apps/forms-rest/src/forms/dto/create_form_response.dto';


@Controller( 'forms' )
export class FormsController {
    constructor ( private forms_service: FormsService ) {}

    @RabbitRPC( {
        routingKey: 'test',
        exchange: EXCHANGES.SHARED_FORMS,
        queue: DEFAULT_QUEUE_NAME,
    } )
    async get_all_responses ( @RabbitPayload() form_id: number ): Promise<Array<CompleteFormResponse>> {
        return this.forms_service.get_all_responses( form_id );
    }

    @RabbitRPC( {
        routingKey: 'test',
        exchange: EXCHANGES.SHARED_FORMS,
        queue: DEFAULT_QUEUE_NAME,
    } )
    async create_response ( @RabbitPayload() data: { form_id: number, create_form_response_dto: CreateFormResponseDto } ) {
        this.forms_service.create_response( data.form_id, data.create_form_response_dto );
    }

    @RabbitRPC( {
        routingKey: 'test',
        exchange: EXCHANGES.SHARED_FORMS,
        queue: DEFAULT_QUEUE_NAME,
    } )
    async get_form_by_id ( @RabbitPayload() id: number ): Promise<CompleteForm | null> {
        return this.forms_service.get_form_by_id( id );
    }

    @RabbitRPC( {
        routingKey: 'test',
        exchange: EXCHANGES.SHARED_FORMS,
        queue: DEFAULT_QUEUE_NAME,
    } )
    async get_all_forms (): Promise<Array<CompleteForm>> {
        return this.get_all_forms();
    }

    @RabbitRPC( {
        routingKey: 'test',
        exchange: EXCHANGES.SHARED_FORMS,
        queue: DEFAULT_QUEUE_NAME,
    } )
    async create_form ( @RabbitPayload() data: CreateFormDto ) {
        await this.forms_service.create_form( data );
    }
}
