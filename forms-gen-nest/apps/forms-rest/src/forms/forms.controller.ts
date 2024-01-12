import { RabbitPayload, RabbitRPC } from '@golevelup/nestjs-rabbitmq';
import { Body, Controller, Get, Param, ParseIntPipe, Post, Sse, MessageEvent } from '@nestjs/common';
import { ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import * as _ from 'lodash';
import { CompleteForm, PendingForm } from 'prisma-forms/prisma-forms';
import { EXCHANGES } from 'rmq/rmq';
import { finalize, interval, map, Observable } from 'rxjs';
import { CreateFormDto } from './dto/create_form.dto';
import { CreateFormResponseDto } from './dto/create_form_response.dto';
import { NotFoundExceptionDto } from './dto/exceptions/not_found_exception.dto';
import { FormDto } from './dto/form.dto';
import { FormDescriptionShortDto } from './dto/forms_short_list_dto';
import { FormResponseDto } from './dto/form_response.dto';
import { FormsService } from './forms.service';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { GenerateFormDto } from './dto/generate_form.dto';
import { PendingFormDto } from './dto/pending_form.dto';


@ApiTags( 'Forms' )
@Controller( 'form' )
export class FormsController {
    constructor (
        private forms_service: FormsService,
        private event_emitter: EventEmitter2,
    ) { }

    @ApiOperation( { summary: 'Returns all responses for specified form' } )
    @ApiOkResponse( { type: [FormResponseDto] } )
    @Get( ':form_id/response' )
    async get_all_responses ( @Param( 'form_id', new ParseIntPipe() ) form_id: number ) {
        return _.map( await this.forms_service.get_all_responses( form_id ), ( val ) => {
            return new FormResponseDto( val );
        } );
    }

    @ApiOperation( { summary: 'Creates response to a form' } )
    @ApiCreatedResponse()
    @Post( ':form_id/response' )
    async create_response ( @Param( 'form_id', new ParseIntPipe() ) form_id: number, @Body() create_form_response_dto: CreateFormResponseDto ): Promise<void> {
        return this.forms_service.create_response( form_id, create_form_response_dto );
    }

    @ApiOperation( { summary: 'Return complete form description by form id' } )
    @ApiOkResponse( { type: FormDto } )
    @ApiNotFoundResponse( { type: NotFoundExceptionDto } )
    @Get( ':id' )
    async get_form_by_id ( @Param( 'id', new ParseIntPipe() ) id: number ) {
        const form = await this.forms_service.get_form_by_id( id );
        if ( form === null ) {
            throw new NotFoundExceptionDto( { name: 'id', value: id } );
        }
        return new FormDto( form );
    }

    @ApiOperation( { summary: 'Returns short description of all forms' } )
    @ApiOkResponse( { type: [FormDescriptionShortDto] } )
    @Get()
    async get_all_forms () {
        const forms = await this.forms_service.get_all_forms();
        return _.map( forms, ( val ) => {
            return new FormDescriptionShortDto( val );
        } );
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
            data: new FormDescriptionShortDto( data ),
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
}
