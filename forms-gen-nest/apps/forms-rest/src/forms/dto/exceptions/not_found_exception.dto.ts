import { NotFoundException } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class NotFoundExceptionDto extends NotFoundException {
    @ApiProperty()
        description: string;
    @ApiProperty( { description: 'Data containing query and it\'s name', type: () => NotFoundExceptionQeuryDto } )
        data: { name: string, value: any};

    constructor ( query: NotFoundExceptionQeuryDto ) {
        super( {
            description: `No object was found with corresponding ${query.name}`,
            data: query,
        } );
    }
}

class NotFoundExceptionQeuryDto {
    @ApiProperty()
        name: string;
    @ApiProperty()
        value: any;
}
