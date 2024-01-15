import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsOptional, IsString, ValidateNested } from 'class-validator';

export class GenerationCompleteDto {
    @ApiProperty()
    @IsString()
    id: string;

    @ApiProperty( {type: () => [GenerationCompleteQuestionDto] } )
    @IsArray()
    @Type( () => GenerationCompleteQuestionDto )
    @ValidateNested( { each: true } )
    questions: Array<GenerationCompleteQuestionDto>;
}

export class GenerationCompleteQuestionDto {
    @ApiProperty()
    @IsString()
    question: string;

    @ApiProperty( {type: () => [String] } )
    @Type( () => String )
    @IsArray()
    answers: Array<string>;

    @ApiProperty()
    @IsString()
    @IsOptional()
    correct_answer?: string;
}
