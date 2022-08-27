import { Component, Input, OnInit } from '@angular/core';
import { FormResponse } from 'src/app/types/form_response';
import { FormResponsesService } from '../form-responses.service';

@Component( {
    selector: 'form-responses-window',
    templateUrl: './window.component.html',
    styleUrls: ['./window.component.scss'],
} )
export class WindowComponent implements OnInit {
    @Input() form_id!: number;
    responses: Array<FormResponse> = [];
    loading: boolean = true;

    constructor ( private form_responses_service: FormResponsesService ) { }

    ngOnInit (): void {
        if ( this.form_id == undefined ) {
            throw new Error( 'Form id undefined' );
        }
        this.form_responses_service.get_responses_by_form_id( this.form_id )
            .then( ( val ) => {
                this.responses = val;
            } )
            .finally( () => {
                this.loading = false;
            } ); ;
    }
}
