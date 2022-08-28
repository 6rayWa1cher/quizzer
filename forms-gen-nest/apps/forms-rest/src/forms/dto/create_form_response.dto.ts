import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, ValidateNested } from 'class-validator';
import { FormFieldResponseDto } from './form_response.dto';

export class CreateFormResponseDto {
    @ApiProperty( { type: () => [FormFieldResponseDto] } )
    @ValidateNested( { each: true } )
    @Type( () => FormFieldResponseDto )
    @IsArray()
    fields: Array<FormFieldResponseDto>;
}
