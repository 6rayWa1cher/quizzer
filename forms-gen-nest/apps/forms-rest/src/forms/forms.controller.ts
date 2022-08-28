import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import * as _ from 'lodash';
import { CreateFormDto } from './dto/create_form.dto';
import { CreateFormResponseDto } from './dto/create_form_response.dto';
import { NotFoundExceptionDto } from './dto/exceptions/not_found_exception.dto';
import { FormDto } from './dto/form.dto';
import { FormDescriptionShortDto } from './dto/forms_short_list_dto';
import { FormResponseDto } from './dto/form_response.dto';
import { FormsService } from './forms.service';


@ApiTags( 'Forms' )
@Controller( 'form' )
export class FormsController {
    constructor ( private forms_service: FormsService ) { }

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
}
