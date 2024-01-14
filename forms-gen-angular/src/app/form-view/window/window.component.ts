import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { FormFieldResponse } from 'src/app/types/form_field_response';
import { Form } from '../../types/form';
import { FormViewService } from '../form-view.service';

@Component( {
    selector: 'form-view-window',
    templateUrl: './window.component.html',
    styleUrls: ['./window.component.scss'],
} )
export class WindowComponent implements OnInit {
    status: 'loading' | 'ok' | 'submitted' | 'deleted' = 'loading';

    @Input() form_id!: number;
    @Input() is_admin: boolean = false;

    form: Form = {
        id: -1,
        name: '',
        description: '',
        created_at: new Date( 0 ),
        fields: [],
        form_status: 'ok',
    };

    constructor ( private form_view_service: FormViewService ) { }

    ngOnInit (): void {
        if ( this.form_id == undefined ) {
            throw new Error( 'WindowComponent: form id undefined' );
        }
        this.form_view_service.get_form_by_id( this.form_id, this.is_admin )
            .then( ( val ) => {
                this.form = val;
            } )
            .finally( () => {
                this.status = 'ok';
            } ); ;
    }

    form_response ( data: Array<FormFieldResponse> ) {
        this.form_view_service.submit_form( data, this.form.id ).then( () => {
            this.status = 'submitted';
        } );
    }

    delete_form () {
        this.form_view_service.delete_form_by_id( this.form.id ).then( () => {
            this.status = 'deleted';
        } );
    }
}
