import { ForbiddenException } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class ForbiddenExceptionDto extends ForbiddenException {
    @ApiProperty()
        description: string;

    constructor ( description: string ) {
        super( { description } );
    }
}
