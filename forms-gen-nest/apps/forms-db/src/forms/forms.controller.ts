import { Controller } from '@nestjs/common';
import { RabbitRPC, RabbitPayload, AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { EXCHANGES } from 'rmq/rmq';
import { FormsService } from './forms.service';
import { CompleteForm, CompleteFormResponse, PendingForm, ShortForm } from 'prisma-forms/prisma-forms';
import { CreateFormDto } from 'apps/forms-rest/src/forms/dto/create_form.dto';
import { CreateFormResponseDto } from 'apps/forms-rest/src/forms/dto/create_form_response.dto';
import { RmqError, RmqOk, RmqResponse } from 'rmq/rmq/responses';
import { GenerateFormDto } from 'apps/forms-rest/src/forms/dto/generate_form.dto';
import { GenerationUpdateDto } from '../dto/generation_from_update.dto';
import { GenerationCompleteDto } from '../dto/generation_from_complete.dto';
import { AllFormsShortDto } from '../dto/all_forms_short.dto';
import { GetFormByIdDto } from 'apps/forms-rest/src/forms/dto/get_form_by_id.dto';
import { DeleteFormDto } from 'apps/forms-rest/src/forms/dto/delete_from.dto';


@Controller( 'forms' )
export class FormsController {
    constructor (
        private forms_service: FormsService,
        private readonly amqp_connection: AmqpConnection,
    ) { }

    async default_rmq_handler<T> ( data: Promise<T> ): Promise<RmqResponse<T>> {
        return data
            .then( ( val ) => {
                return new RmqOk( val );
            } )
            .catch( ( err ) => {
                return new RmqError( err );
            } );
    }

    @RabbitRPC( {
        routingKey: 'form.response.get_all',
        exchange: EXCHANGES.SHARED_FORMS,
        queue: 'forms-db:form.response.get_all',
        queueOptions: {
            durable: false,
        }
    } )
    async get_all_responses ( @RabbitPayload() form_id: number ): Promise<RmqOk<Array<CompleteFormResponse>>> {
        return this.default_rmq_handler( this.forms_service.get_all_responses( form_id ) );
    }

    @RabbitRPC( {
        routingKey: 'form.response.post',
        exchange: EXCHANGES.SHARED_FORMS,
        queue: 'forms-db:form.response.post',
    } )
    async create_response ( @RabbitPayload() data: { form_id: number, create_form_response_dto: CreateFormResponseDto } ) {
        return this.default_rmq_handler( this.forms_service.create_response( data.form_id, data.create_form_response_dto ) );
        // return this.default_rmq_handler(
        //     this.forms_service.create_response( data.form_id, data.create_form_response_dto )
        //         .then( ( val: CompleteFormResponse | null ) => {
        //             if ( val !== null ) {
        //                 this.amqp_connection.publish(
        //                     EXCHANGES.SHARED_FORMS,
        //                     'form.response.created',
        //                     val,
        //                 );
        //             }
        //             return val;
        //         } ),
        // );
    }

    @RabbitRPC( {
        routingKey: 'form.get_by_id',
        exchange: EXCHANGES.SHARED_FORMS,
        queue: 'forms-db:form.get_by_id',
        queueOptions: {
            durable: false,
        }
    } )
    async get_form_by_id ( @RabbitPayload() get_form_by_id_dto: GetFormByIdDto ): Promise<RmqOk<CompleteForm | null>> {
        return this.default_rmq_handler( this.forms_service.get_form_by_id( get_form_by_id_dto ) );
    }

    @RabbitRPC( {
        routingKey: 'form.get_all',
        exchange: EXCHANGES.SHARED_FORMS,
        queue: 'forms-db:form.get_all',
        queueOptions: {
            durable: false,
        }
    } )
    async get_all_forms (): Promise<RmqOk<AllFormsShortDto>> {
        return this.default_rmq_handler( this.forms_service.get_all_forms() );
    }

    @RabbitRPC( {
        routingKey: 'form.post',
        exchange: EXCHANGES.SHARED_FORMS,
        queue: 'forms-db:form.post',
    } )
    async create_form ( @RabbitPayload() data: CreateFormDto ): Promise<RmqOk<CompleteForm | null>> {
        return this.default_rmq_handler(
            this.forms_service.create_form( data )
                .then( ( val ) => {
                    this.amqp_connection.publish(
                        EXCHANGES.SHARED_FORMS,
                        'form.created',
                        val,
                    );
                    return val;
                } ),
        );
    }

    @RabbitRPC( {
        routingKey: 'form.generate',
        exchange: EXCHANGES.SHARED_FORMS,
        queue: 'forms-db:form.generate',
    } )
    async generate_form ( @RabbitPayload() data: GenerateFormDto ): Promise<PendingForm | null> {
        return this.forms_service.generate_form( data ).then( ( val ) => {
            this.amqp_connection.publish(
                EXCHANGES.SHARED_FORMS,
                'ai.generate',
                val,
            );

            this.amqp_connection.publish(
                EXCHANGES.SHARED_FORMS,
                'form.pending.update',
                val,
            );
            return val;
        } );
    }

    @RabbitRPC( {
        routingKey: 'form.generation.update',
        exchange: EXCHANGES.SHARED_FORMS,
        queue: 'forms-db:form.generation.update',
    } )
    async form_generation_update ( @RabbitPayload() data: GenerationUpdateDto ): Promise<PendingForm | null> {
        return this.forms_service.generation_update( data ).then( ( val ) => {
            console.log( 'forms_controller_val', val );
            this.amqp_connection.publish(
                EXCHANGES.SHARED_FORMS,
                'form.pending.update',
                val,
            );
            return val;
        } ).catch( ( err ) => {
            console.error( err );
            return null;
        } );
    }

    @RabbitRPC( {
        routingKey: 'form.generation.complete',
        exchange: EXCHANGES.SHARED_FORMS,
        queue: 'forms-db:form.generation.complete',
    } )
    async form_generation_complete ( @RabbitPayload() data: GenerationCompleteDto ): Promise<RmqOk<CompleteForm | null>> {
        return this.default_rmq_handler(
            this.forms_service.generation_complete( data )
                .then( ( val ) => {
                    this.amqp_connection.publish(
                        EXCHANGES.SHARED_FORMS,
                        'form.created',
                        val,
                    );
                    return val;
                } ),
        );
    }

    @RabbitRPC( {
        routingKey: 'form.delete',
        exchange: EXCHANGES.SHARED_FORMS,
        queue: 'forms-db:form.delete',
    } )
    async form_delete ( @RabbitPayload() data: DeleteFormDto ): Promise<RmqOk<ShortForm | null>> {
        return this.default_rmq_handler(
            this.forms_service.delete_form( data )
                .then( ( val ) => {
                    this.amqp_connection.publish(
                        EXCHANGES.SHARED_FORMS,
                        'form.deleted',
                        val,
                    );
                    return val;
                } ),
        );
    }
}
