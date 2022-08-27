import { Type } from 'class-transformer';
import { IsArray, IsString, MaxLength, ValidateNested } from 'class-validator';
import { FormFieldAnyDto, FormFieldDto, FormFieldInputDto, FormFieldSelectDto, FormFieldTextAreaDto } from './form_field.dto';

export class CreateFormDto {
    @IsString()
    @MaxLength( 32 )
    name: string;

    @IsString()
    @MaxLength( 512 )
    description: string;

    @ValidateNested( { each: true } )
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
    @IsArray()
    fields: Array<FormFieldDto>;
}

