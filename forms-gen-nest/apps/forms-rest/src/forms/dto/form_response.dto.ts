import { Exclude, Expose, Type } from 'class-transformer';
import * as _ from 'lodash';
import { IsInt, IsString } from 'class-validator';

@Exclude()
export class FormResponseDto {
    @Expose()
    id: number;

    @Expose()
    form_id: number;

    @Expose()
    @Type( () => FormFieldResponseDto )
    fields: Array<FormFieldResponseDto>;

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
    @IsInt()
    @Expose()
    id: number;

    @IsString()
    @Expose()
    data: string;

    constructor ( data: FormFieldResponseDto ) {
        Object.assign( this, data );
    }
}
