import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormField } from 'src/app/types/form_field';

@Component( {
    selector: 'form-editor-fields-collection',
    templateUrl: './fields-collection.component.html',
    styleUrls: ['./fields-collection.component.scss'],
} )
export class FieldsCollectionComponent implements OnInit {
    @Input() fields: Array<FormField> = [];
    @Output() fieldsChange: EventEmitter<Array<FormField>> = new EventEmitter();

    constructor () { }

    ngOnInit (): void {
    }

    append_field ( type: FormField['type'] ) {
        switch ( type ) {
        case 'input':
            this.fields.push( {
                name: '',
                description: '',
                type: type,
            } );
            break;
        case 'textarea':
            this.fields.push( {
                name: '',
                description: '',
                type: type,
            } );
            break;
        case 'select':
            this.fields.push( {
                name: '',
                description: '',
                type: type,
                options: [],
            } );
            break;
        default:
            throw new Error( `Unsupported type ${type}` );
        }
        this.fieldsChange.emit( this.fields );
    }

    remove_field ( i: number ) {
        this.fields.splice( i, 1 );
        this.fieldsChange.emit( this.fields );
    }

    fields_updated () {
        this.fieldsChange.emit( this.fields );
    }
}
