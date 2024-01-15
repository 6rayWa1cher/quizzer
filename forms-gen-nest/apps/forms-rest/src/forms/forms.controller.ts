import { RabbitPayload, RabbitRPC } from '@golevelup/nestjs-rabbitmq';
import { Body, Controller, Get, Param, ParseIntPipe, Post, Sse, MessageEvent, ParseBoolPipe, Query, Delete } from '@nestjs/common';
import { ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import * as _ from 'lodash';
import { CompleteForm, PendingForm, ShortForm } from 'prisma-forms/prisma-forms';
import { EXCHANGES } from 'rmq/rmq';
import { CreateFormDto } from './dto/create_form.dto';
import { CreateFormResponseDto } from './dto/create_form_response.dto';
import { NotFoundExceptionDto } from './dto/exceptions/not_found_exception.dto';
import { FormDto } from './dto/form.dto';
import { FormsService } from './forms.service';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { GenerateFormDto } from './dto/generate_form.dto';
import { PendingFormDto } from './dto/pending_form.dto';
import { GetAllFormsDto } from './dto/get_all_forms.dto';
import { FormShortDto } from './dto/forms_short.dto';
import { GetFormByIdDto } from './dto/get_form_by_id.dto';
import { FormResponseResponseDto } from './dto/form_response_response.dto';


@ApiTags( 'Forms' )
@Controller( 'form' )
export class FormsController {
    constructor (
        private forms_service: FormsService,
        private event_emitter: EventEmitter2,
    ) { }

    @ApiOperation( { summary: 'Returns all responses for specified form' } )
    @ApiOkResponse( { type: [FormResponseResponseDto] } )
    @Get( ':form_id/response' )
    async get_all_responses ( @Param( 'form_id', new ParseIntPipe() ) form_id: number ) {
        return _.map( await this.forms_service.get_all_responses( form_id ), ( val ) => {
            return new FormResponseResponseDto( val );
        } );
    }

    @ApiOperation( { summary: 'Creates response to a form' } )
    @ApiCreatedResponse()
    @Post( ':form_id/response' )
    async create_response ( @Param( 'form_id', new ParseIntPipe() ) form_id: number, @Body() create_form_response_dto: CreateFormResponseDto ): Promise<FormResponseResponseDto> {
        const form_response = await this.forms_service.create_response( form_id, create_form_response_dto );
        return new FormResponseResponseDto( form_response );
    }

    @ApiOperation( { summary: 'Return complete form description by form id' } )
    @ApiOkResponse( { type: FormDto } )
    @ApiNotFoundResponse( { type: NotFoundExceptionDto } )
    @Get( ':id' )
    async get_form_by_id ( @Param( 'id', new ParseIntPipe() ) id: number, @Query( 'include_correct_answer' ) include_correct_answer?: string ) {
        const form = await this.forms_service.get_form_by_id( new GetFormByIdDto( id, include_correct_answer == 'true' ) );
        if ( form === null ) {
            throw new NotFoundExceptionDto( { name: 'id', value: id } );
        }
        return new FormDto( form );
    }

    @ApiOperation( { summary: 'Returns short description of all forms' } )
    @ApiOkResponse( { type: [GetAllFormsDto] } )
    @Get()
    async get_all_forms () {
        const forms = await this.forms_service.get_all_forms();
        return new GetAllFormsDto( forms );
    }

    @ApiOperation( { summary: 'Creates form' } )
    @ApiCreatedResponse()
    @Post()
    async create_form ( @Body() create_form_dto: CreateFormDto ): Promise<void> {
        return this.forms_service.create_form( create_form_dto );
    }

    @RabbitRPC( {
        routingKey: 'form.created',
        exchange: EXCHANGES.SHARED_FORMS,
        queue: 'forms-rest:form.created',
        queueOptions: {
            durable: false,
        }
    } )
    async form_created ( @RabbitPayload() data: CompleteForm ) {
        this.event_emitter.emit( 'sse.forward', {
            type: 'form.created',
            data: new FormShortDto( data ),
        } );
    }

    @ApiOperation( { summary: 'Generate form using 🦄ai🦄' } )
    @ApiCreatedResponse()
    @Post( 'generate' )
    async generate_form ( @Body() generate_form_dto: GenerateFormDto ): Promise<void> {
        return this.forms_service.generate_form( generate_form_dto );
    }

    @RabbitRPC( {
        routingKey: 'form.pending.update',
        exchange: EXCHANGES.SHARED_FORMS,
        queue: 'forms-rest:form.pending.update',
        queueOptions: {
            durable: false,
        }
    } )
    async form_pending_update ( @RabbitPayload() data: PendingForm ) {
        this.event_emitter.emit( 'sse.forward', {
            type: 'form.pending.update',
            data: new PendingFormDto( data ),
        } );
    }

    @ApiOperation( { summary: 'Delete form' } )
    @ApiCreatedResponse()
    @Delete( ':id' )
    async delete ( @Param( 'id', new ParseIntPipe() ) id: number ): Promise<void> {
        return this.forms_service.delete_form( id );
    }

    @RabbitRPC( {
        routingKey: 'form.deleted',
        exchange: EXCHANGES.SHARED_FORMS,
        queue: 'forms-rest:form.deleted',
        queueOptions: {
            durable: false,
        }
    } )
    async form_deleted ( @RabbitPayload() data: ShortForm ) {
        this.event_emitter.emit( 'sse.forward', {
            type: 'form.deleted',
            data: new FormShortDto( data ),
        } );
    }
}
