import * as _ from 'lodash';
import { IsInt, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CompleteFormResponse } from 'prisma-forms/prisma-forms';

export class FormFieldResponseRequestDto {
    @ApiProperty()
    @IsInt()
    form_field_id: number;

    @ApiProperty()
    @IsString()
    data: string;
}
