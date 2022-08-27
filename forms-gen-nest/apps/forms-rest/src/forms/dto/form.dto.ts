import { Exclude, Expose, Type } from 'class-transformer';
import * as _ from 'lodash';
import { FormFieldDto, FormFieldAnyDto, FormFieldInputDto, FormFieldSelectDto, FormFieldTextAreaDto } from './form_field.dto';


@Exclude()
export class FormDto {
    @Expose()
    id: number;

    @Expose()
    name: string;

    @Expose()
    description: string;

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

    @Expose()
    created_at: number;

    constructor ( data: unknown ) {
        // Object.assign( this, data );
        // this.fields = _.map( data.fields, ( elem ) => {
        //     switch ( elem.type ) {
        //     case 'input':
        //         return new FormFieldInputDto( elem );
        //     case 'textarea':
        //         return new FormFieldTextAreaDto( elem );
        //     case 'select':
        //         return new FormFieldSelectDto( elem );
        //     }
        // } );
        // this.created_at = data.created_at.valueOf();
    }
}
