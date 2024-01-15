import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, ValidateNested } from 'class-validator';
import { FormFieldResponseRequestDto } from './form_response_request.dto';

export class CreateFormResponseDto {
    @ApiProperty( { type: () => [FormFieldResponseRequestDto] } )
    @ValidateNested( { each: true } )
    @Type( () => FormFieldResponseRequestDto )
    @IsArray()
    fields: Array<FormFieldResponseRequestDto>;
}
