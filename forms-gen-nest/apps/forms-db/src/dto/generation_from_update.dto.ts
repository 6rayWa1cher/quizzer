import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class GenerationUpdateDto {
    @ApiProperty()
    @IsString()
    id: string;

    @ApiProperty()
    @IsInt()
    questions_done: number;
}
