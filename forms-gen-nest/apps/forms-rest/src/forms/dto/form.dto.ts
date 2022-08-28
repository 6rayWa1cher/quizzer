import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose, Type } from 'class-transformer';
import * as _ from 'lodash';
import { CompleteForm } from 'prisma-forms/prisma-forms';
import { FormFieldDto, FormFieldAnyDto, FormFieldInputDto, FormFieldSelectDto, FormFieldTextAreaDto } from './form_field.dto';


@Exclude()
export class FormDto {
    @ApiProperty()
    @Expose()
    id: number;

    @ApiProperty()
    @Expose()
    name: string;

    @ApiProperty()
    @Expose()
    description: string;

    @ApiProperty( { type: () => FormFieldAnyDto } )
    @Expose()
    @Type( () => FormFieldAnyDto, {
        discriminator: {
            property: 'type',
            subTypes: [
                { value: FormFieldInputDto, name: 'input' },
                { value: FormFieldTextAreaDto, name: 'textarea' },
                { value: FormFieldSelectDto, name: 'select' },
            ],
        },
        keepDiscriminatorProperty: true,
    } )
    fields: Array<FormFieldDto>;

    @ApiProperty()
    @Expose()
    created_at: number;

    constructor ( data: CompleteForm ) {
        Object.assign( this, data );
        this.fields = _.map( data.fields, ( elem ) => {
            switch ( elem.type ) {
            case 'input':
                return new FormFieldInputDto( elem );
            case 'textarea':
                return new FormFieldTextAreaDto( elem );
            case 'select':
                return new FormFieldSelectDto( elem );
            }
        } );
        this.created_at = data.created_at.valueOf();
    }
}
