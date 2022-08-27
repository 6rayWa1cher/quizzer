import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as _ from 'lodash';
import { FormField } from 'src/app/types/form_field';
import { FormFieldResponse } from 'src/app/types/form_field_response';

@Component( {
    selector: 'form-view-fields-collection',
    templateUrl: './fields-collection.component.html',
    styleUrls: ['./fields-collection.component.scss'],
} )
export class FieldsCollectionComponent implements OnInit, OnChanges {
    @Input() fields: Array<FormField> = [];
    responses: Array<FormFieldResponse> = [];

    constructor () { }

    ngOnInit (): void {
        this.responses = _.map( this.fields, ( field ) => {
            return { name: field.name, data: '' };
        } );
    }

    ngOnChanges ( changes: SimpleChanges ): void {
        if ( 'fields' in changes ) {
            this.responses = _.map( this.fields, ( field ) => {
                return { name: field.name, data: '' };
            } );
        }
    }
}
