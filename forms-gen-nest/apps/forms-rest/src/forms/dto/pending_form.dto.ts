import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsInt, IsString } from 'class-validator';
import { PendingForm } from 'prisma-forms/prisma-forms';

@Exclude()
export class PendingFormDto {
    @ApiProperty()
    @IsString()
    @Expose()
    id: string;

    @ApiProperty()
    @IsString()
    @Expose()
    name: string;

    @ApiProperty()
    @IsString()
    @Expose()
    prompt: string;

    @ApiProperty()
    @IsInt()
    @Expose()
    questions_count: string;

    @ApiProperty()
    @IsInt()
    @Expose()
    questions_done: string;

    constructor ( data: PendingForm ) {
        Object.assign( this, data );
    }
}

