import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsArray, IsIn, IsOptional, IsString, MaxLength } from 'class-validator';
import * as _ from 'lodash';
import { CompleteForm } from 'prisma-forms/prisma-forms';

@Exclude()
export class FormFieldAnyDto {
    @ApiProperty( { required: false, description: 'It is not requiered for input, but always returned' } )
    @Expose()
    id: string;

    @ApiProperty()
    @Expose()
    @IsString()
    name: string;

    @ApiProperty()
    @Expose()
    @IsString()
    description: string;

    @ApiProperty()
    @Expose()
    @IsString()
    @IsOptional()
    correct_answer?: string;

    @ApiProperty()
    @Expose()
    @IsString()
    @IsIn( ['input', 'textarea', 'select'] )
    type: string;

    constructor ( data: CompleteForm['fields'][0] ) {
        Object.assign( this, data );
    }
}

@Exclude()
export class FormFieldInputDto extends FormFieldAnyDto {
    @ApiProperty()
    @Expose()
    type: 'input' = 'input';

    constructor ( data: CompleteForm['fields'][0] ) {
        super( data );
    }
}

@Exclude()
export class FormFieldTextAreaDto extends FormFieldAnyDto {
    @ApiProperty()
    @Expose()
    type: 'textarea' = 'textarea';

    constructor ( data: CompleteForm['fields'][0] ) {
        super( data );
    }
}

@Exclude()
export class FormFieldSelectDto extends FormFieldAnyDto {
    @ApiProperty()
    @Expose()
    type: 'select' = 'select';

    @ApiProperty()
    @Expose()
    @IsArray()
    @IsString( { each: true } )
    options: Array<string>;

    constructor ( data: CompleteForm['fields'][0] ) {
        super( data );
        this.options = _.map( data?.options, ( elem ) => elem.value );
    }
    def () { }
}

export type FormFieldDto = FormFieldInputDto | FormFieldTextAreaDto | FormFieldSelectDto;
