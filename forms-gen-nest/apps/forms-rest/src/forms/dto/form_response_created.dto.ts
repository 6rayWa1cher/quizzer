import { Exclude, Expose, Type } from 'class-transformer';
import * as _ from 'lodash';
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { FormFieldResponseDto } from './form_response.dto';

@Exclude()
export class FormResponseCreatedDto {
    @ApiProperty()
    @Expose()
    id: number;

    @ApiProperty()
    @Expose()
    form_id: number;

    @ApiProperty( { type: () => [FormResponseCreatedFiledDto] } )
    @Expose()
    @Type( () => FormResponseCreatedFiledDto )
    fields: Array<FormResponseCreatedFiledDto>;

    @ApiProperty()
    @Expose()
    created_at: number;
}

@Exclude()
export class FormResponseCreatedFiledDto {
    @ApiProperty( { type: () => [FormFieldResponseDto] } )
    @Expose()
    @Type( () => FormFieldResponseDto )
    field: FormFieldResponseDto;

    @ApiProperty()
    @IsString()
    @Expose()
    given_answer: string;

    @ApiProperty()
    @IsString()
    correct_answer: string;
}
