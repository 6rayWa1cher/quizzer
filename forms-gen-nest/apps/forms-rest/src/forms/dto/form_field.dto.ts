import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsArray, IsIn, IsString, MaxLength } from 'class-validator';

@Exclude()
export class FormFieldAnyDto {
    @ApiProperty()
    @Expose()
    @IsString()
    @MaxLength( 32 )
    name: string;

    @ApiProperty()
    @Expose()
    @IsString()
    @MaxLength( 256 )
    description: string;

    @ApiProperty()
    @Expose()
    @IsString()
    @IsIn( ['input', 'textarea', 'select'] )
    type: string;

    constructor ( data: FormFieldAnyDto ) {
        Object.assign( this, data );
    }
}

@Exclude()
export class FormFieldInputDto extends FormFieldAnyDto {
    @ApiProperty()
    @Expose()
    type: 'input' = 'input';

    constructor ( data: FormFieldInputDto ) {
        super( data );
    }
}

@Exclude()
export class FormFieldTextAreaDto extends FormFieldAnyDto {
    @ApiProperty()
    @Expose()
    type: 'textarea' = 'textarea';

    constructor ( data: FormFieldTextAreaDto ) {
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
    @MaxLength( 64, { each: true } )
    options: Array<string>;

    constructor ( data: FormFieldSelectDto ) {
        super( data );
    }
    def () { }
}

export type FormFieldDto = FormFieldInputDto | FormFieldTextAreaDto | FormFieldSelectDto;
