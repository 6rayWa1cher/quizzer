import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { FormStatus, ShortForm } from 'prisma-forms/prisma-forms';


@Exclude()
export class FormShortDto {
    @ApiProperty()
    @Expose()
    id: number;

    @ApiProperty()
    @Expose()
    name: string;

    @ApiProperty()
    @Expose()
    description: string;

    @ApiProperty()
    @Expose()
    created_at: number;

    @ApiProperty()
    @Expose()
    pending_id: string;

    @ApiProperty()
    @Expose()
    form_status: FormStatus;

    constructor ( data: ShortForm ) {
        Object.assign( this, data );
    }
}
