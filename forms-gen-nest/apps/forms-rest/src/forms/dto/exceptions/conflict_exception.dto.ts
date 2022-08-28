import { ConflictException } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';


export class ConflictExceptionDto extends ConflictException {
    @ApiProperty()
        description: string;
    @ApiProperty( { description: 'List of fields violating unique constraint' } )
        data: Array<string>;

    constructor ( fields: Array<string> ) {
        super( {
            description: `${fields.length === 1 ? 'Field' : 'Fields'} ${fields} violate unique constraint`,
            data: fields,
        } );
    }
}
