import { Component, Input, OnInit } from '@angular/core';
import { FormFieldResponse } from 'src/app/types/form_field_response';
import { FormResponse } from 'src/app/types/form_response';

@Component( {
    selector: 'form-responses-response-box',
    templateUrl: './response-box.component.html',
    styleUrls: ['./response-box.component.scss'],
} )
export class ResponseBoxComponent implements OnInit {
    @Input() response!: FormResponse;
    @Input() name: string = '';

    displayed_columns = ['index', 'name', 'data', 'correct_answer'];

    constructor () { }

    ngOnInit (): void {
        if ( this.response == undefined ) {
            throw new Error( 'response undefined' );
        }
    }

    answer_color ( response: FormFieldResponse ): 'green' | 'red' | undefined {
        console.log( response );
        if ( response.correct_answer == undefined ) {
            return undefined;
        }
        if ( response.data === response.correct_answer ) {
            return 'green';
        }
        return 'red';
    }
}
