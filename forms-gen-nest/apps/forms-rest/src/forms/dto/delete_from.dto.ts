import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';


export class DeleteFormDto {
    @ApiProperty()
    @IsInt()
    form_id: number;

    constructor ( form_id: number ) {
        this.form_id = form_id;
    }
}
