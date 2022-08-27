import { Component, Input, OnInit } from '@angular/core';
import { FormResponse } from 'src/app/types/form_response';

@Component( {
    selector: 'form-responses-response-box',
    templateUrl: './response-box.component.html',
    styleUrls: ['./response-box.component.scss'],
} )
export class ResponseBoxComponent implements OnInit {
    @Input() response!: FormResponse;
    @Input() name: string = '';

    displayed_columns = ['index', 'name', 'data'];

    constructor () { }

    ngOnInit (): void {
        if ( this.response == undefined ) {
            throw new Error( 'response undefined' );
        }
    }
}
