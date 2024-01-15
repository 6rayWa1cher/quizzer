import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt } from 'class-validator';


export class GetFormByIdDto {
    @ApiProperty()
    @IsInt()
    id: number;

    @ApiProperty()
    @IsBoolean()
    include_correct_answers?: boolean;

    constructor ( id: number, include_correct_answers?: boolean ) {
        this.id = id;
        this.include_correct_answers = include_correct_answers;
    }
}
