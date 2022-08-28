import { Exclude, Expose, Type } from 'class-transformer';
import * as _ from 'lodash';
import { IsInt, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

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

    constructor ( data: FormResponseDto ) {
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
    id: number;

    @ApiProperty()
    @IsString()
    @Expose()
    data: string;

    constructor ( data: FormFieldResponseDto ) {
        Object.assign( this, data );
    }
}
