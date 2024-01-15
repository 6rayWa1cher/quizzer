import { Exclude, Expose, Type } from 'class-transformer';
import * as _ from 'lodash';
import { IsInt, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CompleteFormResponse } from 'prisma-forms/prisma-forms';
import { FormFieldAnyDto } from './form_field.dto';

@Exclude()
export class FormResponseResponseDto {
    @ApiProperty()
    @Expose()
    id: number;

    @ApiProperty()
    @Expose()
    form_id: number;

    @ApiProperty( { type: () => [FormFieldResponseResponseDto] } )
    @Expose()
    @Type( () => FormFieldResponseResponseDto )
    fields: Array<FormFieldResponseResponseDto>;

    @ApiProperty()
    @Expose()
    created_at: number;

    constructor ( data: CompleteFormResponse ) {
        Object.assign( this, data );
        this.fields = _.map( data.fields, ( elem ) => {
            return new FormFieldResponseResponseDto( elem );
        } );
        this.created_at = data.created_at.valueOf();
    }
}

@Exclude()
export class FormFieldResponseResponseDto {
    @ApiProperty( { type: () => FormFieldAnyDto } )
    @Expose()
    form_field: FormFieldAnyDto;

    @ApiProperty()
    @Expose()
    name: string;

    @ApiProperty()
    @Expose()
    data: string;

    @ApiProperty()
    @Expose()
    correct_answer: string;

    constructor ( data: CompleteFormResponse['fields'][0] ) {
        Object.assign( this, data );
        this.name = data?.form_field.name;
    }
}
