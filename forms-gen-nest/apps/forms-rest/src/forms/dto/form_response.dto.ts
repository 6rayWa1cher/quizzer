import { Exclude, Expose, Type } from 'class-transformer';
import * as _ from 'lodash';
import { IsInt, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CompleteFormResponse } from 'prisma-forms/prisma-forms';

@Exclude()
export class FormResponseDto {
    @ApiProperty()
    @Expose()
    id: number;

    @ApiProperty()
    @Expose()
    form_id: number;

    @ApiProperty( { type: () => [FormFieldResponseDto] } )
    @Expose()
    @Type( () => FormFieldResponseDto )
    fields: Array<FormFieldResponseDto>;

    @ApiProperty()
    @Expose()
    created_at: number;

    constructor ( data: CompleteFormResponse ) {
        Object.assign( this, data );
        this.fields = _.map( data.fields, ( elem ) => {
            return new FormFieldResponseDto( elem );
        } );
        this.created_at = data.created_at.valueOf();
    }
}

@Exclude()
export class FormFieldResponseDto {
    @ApiProperty()
    @IsInt()
    @Expose()
    form_field_id: number;

    @ApiProperty( { required: false, description: 'It is not requiered for input, but always returned' } )
    @Expose()
    name: string;

    @ApiProperty()
    @IsString()
    @MaxLength( 256 )
    @Expose()
    data: string;

    constructor ( data: CompleteFormResponse['fields'][0] ) {
        Object.assign( this, data );
        this.name = data?.form_field.name;
    }
}
