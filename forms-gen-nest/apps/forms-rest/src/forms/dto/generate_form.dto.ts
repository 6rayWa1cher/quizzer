import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class GenerateFormDto {
    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    prompt: string;

    @ApiProperty()
    @IsInt()
    questions_count: number;
}

