import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { ShortForm } from 'prisma-forms/prisma-forms';


@Exclude()
export class FormDescriptionShortDto {
    @ApiProperty()
    @Expose()
    id: number;

    @ApiProperty()
    @Expose()
    name: string;

    @ApiProperty()
    @Expose()
    description: string;

    constructor ( data: ShortForm ) {
        Object.assign( this, data );
    }
}
