import { Exclude, Expose, Type } from 'class-transformer';
import { FormShortDto } from './forms_short.dto';
import { PendingFormDto } from './pending_form.dto';
import { AllFormsShortDto } from 'apps/forms-db/src/dto/all_forms_short.dto';
import { ApiProperty } from '@nestjs/swagger';

@Exclude()
export class GetAllFormsDto {
    @ApiProperty( { type: () => [FormShortDto] } )
    @Expose()
    @Type( () => FormShortDto )
    forms: Array<FormShortDto>;

    @ApiProperty( { type: () => [PendingFormDto] } )
    @Expose()
    @Type( () => PendingFormDto )
    pending_forms: Array<PendingFormDto>;

    constructor ( data: AllFormsShortDto ) {
        Object.assign( this, data );
    }
}
