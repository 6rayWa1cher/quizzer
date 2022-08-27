import { Exclude, Expose } from 'class-transformer';


@Exclude()
export class FormDescriptionShortDto {
    @Expose()
    id: number;

    @Expose()
    name: string;

    @Expose()
    description: string;

    constructor ( data: unknown ) {
        Object.assign( this, data );
    }
}
